import { FilterTitles } from 'App';

export interface FiltersList {
  name: 'None' | 'Done' | 'Pending';
  value: FilterTitles;
}

export const filters: FiltersList[] = [
  {
    name: 'Done',
    value: 'done',
  },
  {
    name: 'Pending',
    value: 'pending',
  },
];
