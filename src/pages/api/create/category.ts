import { NextApiRequest, NextApiResponse } from 'next';
import { createTableObj } from '../../../../db/databaseRequests/createTable/createTableObj';
import { InitializeTableNames } from '../../../../db/utils/initializeAllFoodCategoriesTable';

//   name: string;
//   label: string;
//   icon?: string;
//   backgroundImage?: string;
//   itemCount: number;

interface ResponseData {
  message: string;
}

export default async function category(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { icon, infoList } = JSON.parse(req.body);
  createTableObj(InitializeTableNames.food_items, [
    {
      property: 'name',
      value: icon,
    },
  ]);
}
