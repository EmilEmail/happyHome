import { ICONS } from '../assets/consts/ICONS';
import { FOOD_CATEGORY_INTERFACE } from '../interfaces/FOOD_CATEGORY_INTERFACE';

export const FOOD_CATEGORY_LIST_MOCK: FOOD_CATEGORY_INTERFACE[] = [
  {
    id: 2,
    name: 'fish',
    icon: ICONS.Fish,
    label: 'Fisk',
  },
  {
    id: 3,
    name: 'drinks',
    icon: ICONS.Drinks,
    label: 'Drycker',
  },
  {
    id: 4,
    name: 'meat',
    icon: ICONS.Meat,
    label: 'Kött',
  },
  {
    id: 5,
    name: 'chicken',
    icon: ICONS.Pork,
    label: 'Kyckling',
  },
  {
    id: 6,
    name: 'vegan',
    icon: ICONS.VeganFood,
    label: 'Vegankött',
  },
  {
    id: 7,
    name: 'cans',
    icon: ICONS.cans,
    label: 'Konserver',
  },
  {
    id: 8,
    name: 'sauces',
    icon: ICONS.sauces,
    label: 'Såser',
  },
  {
    id: 9,
    name: 'seafood',
    icon: ICONS.seafood,
    label: 'Skaldjur',
  },
  {
    id: 10,
    name: 'toppings',
    icon: ICONS.toppings,
    label: 'Pålägg',
  },
];
