import { createTableObj } from '../databaseRequests/createTable/createTableObj';
import { InitializeTableNames } from './initializeAllFoodCategoriesTable';
import { FOOD_CATEGORIES } from '@/app/assets/consts/FOOD_CATEGORIES';

export const initializeAllTestFoodItemsToTable = async () => {
  await createTableObj(InitializeTableNames.food_items, [
    {
      property: 'name',
      value: 'kyckling klubbor',
    },
    {
      property: 'amount',
      value: 10,
    },
    {
      property: 'expired',
      value: '2025-07-11',
    },
    {
      property: 'category',
      value: FOOD_CATEGORIES.Chicken,
    },
  ]);
  await createTableObj(InitializeTableNames.food_items, [
    {
      property: 'name',
      value: 'kycklingfilé',
    },
    {
      property: 'amount',
      value: 2,
    },
    {
      property: 'expired',
      value: '2025-07-11',
    },
    {
      property: 'category',
      value: FOOD_CATEGORIES.Chicken,
    },
  ]);
  await createTableObj(InitializeTableNames.food_items, [
    {
      property: 'name',
      value: 'Kaviar',
    },
    {
      property: 'amount',
      value: 1,
    },
    {
      property: 'expired',
      value: '2025-07-11',
    },
    {
      property: 'category',
      value: FOOD_CATEGORIES.toppings,
    },
  ]);
  await createTableObj(InitializeTableNames.food_items, [
    {
      property: 'name',
      value: 'Veganbiffar',
    },
    {
      property: 'amount',
      value: 20,
    },
    {
      property: 'expired',
      value: '2025-07-11',
    },
    {
      property: 'category',
      value: FOOD_CATEGORIES.VeganFood,
    },
  ]);
};
