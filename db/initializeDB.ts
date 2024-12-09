import { FOOD_CATEGORIES } from '@/app/assets/consts/FOOD_CATEGORIES';
import { createTable } from './databaseRequests/createTable/createTable';
import { deleteTable } from './databaseRequests/delete/deleteTable';
import { getAllFromDB } from './databaseRequests/get/AllFromDB';
import { getAllFromCategory } from './databaseRequests/get/getAllWhere';
import {
  initializeAllFoodCategoriesTable,
  InitializeTableNames,
} from './utils/initializeAllFoodCategoriesTable';
import { initializeAllTestFoodItemsToTable } from './utils/initializeAllTestFoodItemsToTable';

export const initializeApp = async () => {
  try {
    //clear all database//
    await deleteTable(InitializeTableNames.food_categories);
    await deleteTable(InitializeTableNames.food_items);

    // create new databases
    await createTable(InitializeTableNames.food_categories, [
      { property: 'name', type: 'TEXT' },
      { property: 'label', type: 'TEXT' },
      { property: 'icon', type: 'TEXT' },
      { property: 'backgroundImage', type: 'TEXT' },
      { property: 'holder', type: 'TEXT' },
    ]);
    await createTable(InitializeTableNames.food_items, [
      { property: 'name', type: 'TEXT' },
      { property: 'amount', type: 'INTEGER' },
      { property: 'expired', type: 'TEXT' },
      { property: 'category', type: 'TEXT' },
      { property: 'holder', type: 'TEXT' },
    ]);

    //Put in first time
    await initializeAllFoodCategoriesTable();
    await initializeAllTestFoodItemsToTable();

    // To check if it works!
    // await getAllFromDB(InitializeTableNames.food_categories);
    // await getAllFromDB(InitializeTableNames.food_items);
    // await getAllFromCategory(
    //   InitializeTableNames.food_items,
    //   FOOD_CATEGORIES.VeganFood
    // );
  } catch (error) {
    console.log(error);
  }
};
