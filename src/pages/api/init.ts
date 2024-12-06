import { NextApiRequest, NextApiResponse } from 'next';
import { initializeApp } from '../../../db/initializeDB';
import { deleteTable } from '../../../db/databaseRequests/delete/deleteTable';
import { InitializeTableNames } from '../../../db/utils/initializeAllFoodCategoriesTable';

interface ResponseData {
  message: string;
}

export default async function init(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    await deleteTable(InitializeTableNames.food_categories);
    await deleteTable(InitializeTableNames.food_items);
    await initializeApp();
    res.status(200).json({ message: 'restored' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something is wrooong' });
  }
}
