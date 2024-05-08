import { Injectable, inject, signal } from '@angular/core';
import { liveQuery } from 'dexie';
import { nanoid } from 'nanoid';
import { from, of } from 'rxjs';
import { ArmorSetBonus } from '../data/armor-set-bonus';
import { Skill } from '../data/skill';
import { DatabaseService } from './database.service';

type Filter = {
  name?: string;
  skillId?: Skill['id'];
};

type Sort = {
  [key: string]: 'asc' | 'desc' | undefined;
};

export type ArmorSetBonusCreateInput = Pick<ArmorSetBonus, 'name'>;

@Injectable({
  providedIn: 'root'
})
export class ArmorSetBonusService {
  private data = inject(DatabaseService);

  list(
    filter?: Filter,
    sort?: Sort
  ) {
    return from(liveQuery(() => {
      if (this.data.isServer) return [];
      let filtered;
      if (filter?.name != null) {
        const name = filter.name.toLowerCase();
        filtered = this.data.armorSetBonuses.filter(obj => !!(obj.name?.en?.toLowerCase()?.includes(name) || obj.name?.jp?.toLowerCase()?.includes(name)))
      } else if (filter?.skillId != null) {
        filtered = this.data.armorSetBonuses.where('skillId').equals(filter.skillId);
      } else {
        filtered = this.data.armorSetBonuses.toCollection();
      }
      if (sort && Object.values(sort).filter(v => v == 'asc' || v == 'desc').length > 0) {
        const sortKey = Object.entries(sort).filter(([key, v]) => v == 'asc' || v == 'desc')[0][0];
        if (sort[sortKey] === 'desc') {
          return filtered.reverse().sortBy(sortKey);
        } else {
          return filtered.sortBy(sortKey);
        }
      } else {
        return filtered.toArray();
      }
    }))
  }

  count() {
    if (this.data.isServer) return of(0);
    return from(this.data.armorSetBonuses.count())
  }

  mainListFilter$$ = signal<Filter>({});
  mainListSort$$ = signal<Sort>({});

  getOne(
    id: string
  ) {
    return from(liveQuery(() => {
      if (this.data.isServer) return undefined;
      return this.data.armorSetBonuses.get(id);
    }))
  }

  create = (input: ArmorSetBonusCreateInput) => {
    const now = new Date();
    return from(this.data.armorSetBonuses.add({
      id: nanoid(),
      createdAt: now,
      updatedAt: now,
      effects: [],
      ...input,
    }))
  }

  update = (id: string, input: Partial<Pick<ArmorSetBonus, 'name' | 'effects'>>) => {
    return from(this.data.armorSetBonuses.update(
      id,
      {
        updatedAt: new Date(),
        ...input
      }
    ))
  }
}