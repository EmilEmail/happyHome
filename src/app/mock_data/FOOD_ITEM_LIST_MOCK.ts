const FOOD_CATEGORIES = {
  drinks: 'drinks',
  cans: 'cans',
  chicken: 'chicken',
  fish: 'fish',
  meat: 'meat',
  pork: 'pork',
  sauces: 'sauces',
  veganFood: 'veganFood',
};

export interface FOOD_ITEM_INTERFACE {
  id: number;
  name: string;
  amount: number;
  expired: string;
  category: string;
}

export const FOOD_ITEM_LIST_MOCK: FOOD_ITEM_INTERFACE[] = [
  {
    id: 2,
    name: 'Ägg',
    amount: 4,
    expired: 'string',
    category: FOOD_CATEGORIES.chicken,
  },
  {
    id: 3,
    name: 'milk',
    amount: 6,
    expired: 'string',
    category: FOOD_CATEGORIES.chicken,
  },
  {
    id: 4,
    name: 'Fiskpinnar',
    amount: 6,
    expired: 'string',
    category: FOOD_CATEGORIES.chicken,
  },
];
