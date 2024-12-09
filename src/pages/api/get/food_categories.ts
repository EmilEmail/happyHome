import type { NextApiRequest, NextApiResponse } from 'next';
import { InitializeTableNames } from '../../../../db/utils/initializeAllFoodCategoriesTable';
import { FOOD_CATEGORY_INTERFACE } from '@/app/interfaces/FOOD_CATEGORY_INTERFACE';
import { countItemsInCategory } from '../../../../db/utils/CountCategory';
import { getAllFromHolder } from '../../../../db/databaseRequests/get/getAllWhere';

type ResponseData = {
  message: string;
  data: FOOD_CATEGORY_INTERFACE[];
};

export default async function food_categories(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { pageName } = JSON.parse(req.body);
  const allItems =
    ((await getAllFromHolder(
      InitializeTableNames.food_categories,
      pageName
    )) as FOOD_CATEGORY_INTERFACE[]) ?? [];

  const newItemsList = await Promise.all(
    allItems.map(async (item) => {
      try {
        const amount = await countItemsInCategory(
          InitializeTableNames.food_items,
          item.name
        );
        return {
          ...item,
          itemCount: amount,
        };
      } catch (error) {
        console.log(error);
        return item;
      }
    })
  );

  if (newItemsList) {
    res.status(200).json({ message: 'ok', data: newItemsList });
  } else {
    res.status(400).json({ message: 'bad request', data: [] });
  }
}
