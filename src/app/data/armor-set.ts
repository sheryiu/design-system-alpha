import { MultilingualText } from './common';

export type ArmorSet = {
  id: string;
  name: MultilingualText;
  rarity: number;
  rank: 'low' | 'high' | 'master';
}