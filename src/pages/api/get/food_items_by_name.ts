import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllWhere } from '../../../../db/databaseRequests/get/getAllWhere';
import { FOOD_ITEM_INTERFACE } from '@/app/mock_data/FOOD_ITEM_LIST_MOCK';
import { InitializeTableNames } from '../../../../db/utils/initializeAllFoodCategoriesTable';
import { getAllFromDB } from '../../../../db/databaseRequests/get/AllFromDB';
import { FOOD_CATEGORY_INTERFACE } from '@/app/interfaces/FOOD_CATEGORY_INTERFACE';

interface ResponseData {
  message: string;
  data?: FOOD_ITEM_INTERFACE[];
  backgroundImage?: string;
}

interface RequestData {
  tableName: string;
  columnName: string;
}

const validate = (data: RequestData) => {
  if (data) {
    return true;
  }
  return false;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data = JSON.parse(req.body) as RequestData;
  if (validate(data)) {
    try {
      const categoryList = (await getAllFromDB(
        InitializeTableNames.food_categories
      )) as FOOD_CATEGORY_INTERFACE[];
      const category = categoryList.find(
        (i) => i.name === data.columnName
      );
      const response = (await getAllWhere(
        data.tableName,
        data.columnName
      )) as FOOD_ITEM_INTERFACE[];

      res
        .status(200)
        .json({
          message: 'ok',
          data: response,
          backgroundImage: category?.backgroundImage,
        });
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  } else {
    res.status(400).json({ message: 'food_items_by_name - error' });
  }
  //   } else {
  //     res.status(400).json({ message: 'bad request', data: [] });
  //   }
}
