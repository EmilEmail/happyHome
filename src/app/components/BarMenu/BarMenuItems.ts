import { PAGE_NAMES } from '../FoodLayout/FoodLayout';

export interface BAR_MENU_ITEM {
  name: string;
  href: string;
}

export const BarMenuItems = [
  { name: 'Freeze', href: '/freeze' },
  { name: 'Fridge', href: '/fridge' },
  { name: 'Pantry', href: '/pantry' },
];
