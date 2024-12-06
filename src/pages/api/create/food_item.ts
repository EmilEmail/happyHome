import { NextApiRequest, NextApiResponse } from 'next';
import { createTableObj } from '../../../../db/databaseRequests/createTable/createTableObj';
import { InitializeTableNames } from '../../../../db/utils/initializeAllFoodCategoriesTable';
import { OnFormActionProps } from '@/app/components/FormModal/interfaces';

// !Helper
// name: string,
// expired: string
// amount: number
// category: string

interface ResponseData {
  message: string;
}

export default async function food_item(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const {
    infoList,
    category,
  }: OnFormActionProps & { category: string } = JSON.parse(req.body);

  console.log(
    infoList.map((i) => {
      return { property: i.property, value: i.text };
    })
  );

  await createTableObj(InitializeTableNames.food_items, [
    ...infoList.map((i) => {
      return { property: i.property, value: i.text };
    }),
    { property: 'category', value: category },
  ]);

  res.status(200).json({ message: 'ok' });
}
