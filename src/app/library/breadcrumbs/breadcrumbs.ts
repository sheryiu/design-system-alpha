import { ActivatedRoute, Data } from '@angular/router';
import { nanoid } from 'nanoid';
import { Observable } from 'rxjs';

const BREADCRUMB_SYMBOL = Symbol('breadcrumb');

type MappedInstanceType<T extends readonly any[]> = {
  [Key in keyof T]: InstanceType<T[Key]>
}

export type Breadcrumb<Deps extends readonly any[] = any[]> = {
  title: string;
} | {
  deps?: Deps;
  titleFn: (route: ActivatedRoute, ...deps: MappedInstanceType<Deps>) => Observable<string> | string;
};

export function getBreadcrumb(routeData: Data): (Breadcrumb & { id: string }) | undefined {
  return routeData?.[BREADCRUMB_SYMBOL];
}

export function breadcrumb<Deps extends readonly any[]>(breadcrumb: Breadcrumb<Deps>) {
  return {
    [BREADCRUMB_SYMBOL]: {
      id: nanoid(),
      ...breadcrumb,
    },
  }
}