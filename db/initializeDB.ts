import { FOOD_CATEGORIES } from '@/app/assets/consts/FOOD_CATEGORIES';
import { createTable } from './databaseRequests/createTable/createTable';
import { deleteTable } from './databaseRequests/delete/deleteTable';
import { getAllFromDB } from './databaseRequests/get/AllFromDB';
import { getAllWhere } from './databaseRequests/get/getAllWhere';
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

    await createTable(InitializeTableNames.food_categories, [
      { property: 'name', type: 'TEXT' },
      { property: 'label', type: 'TEXT' },
      { property: 'icon', type: 'TEXT' },
      { property: 'backgroundImage', type: 'TEXT' },
    ]);
    await createTable(InitializeTableNames.food_items, [
      { property: 'name', type: 'TEXT' },
      { property: 'amount', type: 'INTEGER' },
      { property: 'expired', type: 'TEXT' },
      { property: 'category', type: 'TEXT' },
    ]);

    await initializeAllFoodCategoriesTable();
    await initializeAllTestFoodItemsToTable();

    const test = await getAllFromDB(
      InitializeTableNames.food_categories
    );
    const test2 = await getAllFromDB(InitializeTableNames.food_items);
    const test3 = await getAllWhere(
      InitializeTableNames.food_items,
      FOOD_CATEGORIES.VeganFood
    );

    console.log('test 1: ', test);
    console.log('test 1: ', test2);
    console.log('test 3: ', test3);
  } catch (error) {
    console.log(error);
  }
};