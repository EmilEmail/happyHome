import { FOOD_CATEGORIES } from '@/app/assets/consts/FOOD_CATEGORIES';
import { ICONS } from '@/app/assets/consts/ICONS';
import { createTableObj } from '../databaseRequests/createTable/createTableObj';
import { PAGE_NAMES } from '@/app/components/FoodLayout/consts';

export const InitializeTableNames = {
  food_categories: 'food_categories',
  food_items: 'food_items',
};

export const initializeAllFoodCategoriesTable = async () => {
  await createTableObj(InitializeTableNames.food_categories, [
    {
      property: 'name',
      value: FOOD_CATEGORIES.Chicken,
    },
    {
      property: 'label',
      value: 'Kyckling',
    },
    {
      property: 'icon',
      value: ICONS.Chicken,
    },
    {
      property: 'backgroundImage',
      value: ICONS.Chicken,
    },
    {
      property: 'holder',
      value: PAGE_NAMES.Freezer,
    },
  ]);
  await createTableObj(InitializeTableNames.food_categories, [
    {
      property: 'name',
      value: FOOD_CATEGORIES.Drinks,
    },
    {
      property: 'label',
      value: 'Drycker',
    },
    {
      property: 'icon',
      value: ICONS.Drinks,
    },
    {
      property: 'backgroundImage',
      value: '',
    },
    {
      property: 'holder',
      value: PAGE_NAMES.Fridge,
    },
  ]);
  await createTableObj(InitializeTableNames.food_categories, [
    {
      property: 'name',
      value: FOOD_CATEGORIES.Fish,
    },
    {
      property: 'label',
      value: 'Fisk',
    },
    {
      property: 'icon',
      value: ICONS.Fish,
    },
    {
      property: 'backgroundImage',
      value: '',
    },
    {
      property: 'holder',
      value: PAGE_NAMES.Pantry,
    },
  ]);
  await createTableObj(InitializeTableNames.food_categories, [
    {
      property: 'name',
      value: FOOD_CATEGORIES.Meat,
    },
    {
      property: 'label',
      value: 'Kött',
    },
    {
      property: 'icon',
      value: ICONS.Meat,
    },
    {
      property: 'backgroundImage',
      value: '',
    },
    {
      property: 'holder',
      value: PAGE_NAMES.Freezer,
    },
  ]);
  await createTableObj(InitializeTableNames.food_categories, [
    {
      property: 'name',
      value: FOOD_CATEGORIES.Pork,
    },
    {
      property: 'label',
      value: 'Fläsk',
    },
    {
      property: 'icon',
      value: ICONS.Pork,
    },
    {
      property: 'backgroundImage',
      value: '',
    },
    {
      property: 'holder',
      value: PAGE_NAMES.Freezer,
    },
  ]);
  await createTableObj(InitializeTableNames.food_categories, [
    {
      property: 'name',
      value: FOOD_CATEGORIES.VeganFood,
    },
    {
      property: 'label',
      value: 'Veganskt',
    },
    {
      property: 'icon',
      value: ICONS.VeganFood,
    },
    {
      property: 'backgroundImage',
      value: '',
    },
    {
      property: 'holder',
      value: PAGE_NAMES.Freezer,
    },
  ]);
  await createTableObj(InitializeTableNames.food_categories, [
    {
      property: 'name',
      value: FOOD_CATEGORIES.cans,
    },
    {
      property: 'label',
      value: 'Konserver',
    },
    {
      property: 'icon',
      value: ICONS.cans,
    },
    {
      property: 'backgroundImage',
      value: '',
    },
    {
      property: 'holder',
      value: PAGE_NAMES.Freezer,
    },
  ]);
  await createTableObj(InitializeTableNames.food_categories, [
    {
      property: 'name',
      value: FOOD_CATEGORIES.sauces,
    },
    {
      property: 'label',
      value: 'Såser',
    },
    {
      property: 'icon',
      value: ICONS.sauces,
    },
    {
      property: 'backgroundImage',
      value: '',
    },
    {
      property: 'holder',
      value: PAGE_NAMES.Freezer,
    },
  ]);
  await createTableObj(InitializeTableNames.food_categories, [
    {
      property: 'name',
      value: FOOD_CATEGORIES.seafood,
    },
    {
      property: 'label',
      value: 'Skaldjur',
    },
    {
      property: 'icon',
      value: ICONS.seafood,
    },
    {
      property: 'backgroundImage',
      value: '',
    },
    {
      property: 'holder',
      value: PAGE_NAMES.Pantry,
    },
  ]);
  await createTableObj(InitializeTableNames.food_categories, [
    {
      property: 'name',
      value: FOOD_CATEGORIES.toppings,
    },
    {
      property: 'label',
      value: 'Pålägg',
    },
    {
      property: 'icon',
      value: ICONS.toppings,
    },
    {
      property: 'backgroundImage',
      value: ICONS.toppings,
    },
    {
      property: 'holder',
      value: PAGE_NAMES.Pantry,
    },
  ]);
};
