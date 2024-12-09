import { NextApiRequest, NextApiResponse } from 'next';
import { createTableObj } from '../../../../db/databaseRequests/createTable/createTableObj';
import { InitializeTableNames } from '../../../../db/utils/initializeAllFoodCategoriesTable';
import { OnFormActionProps } from '@/app/components/FormModal/interfaces';

interface ResponseData {
  message: string;
}

export default async function category(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { icon, infoList, pageName }: OnFormActionProps = JSON.parse(
    req.body
  );

  await createTableObj(InitializeTableNames.food_categories, [
    {
      property: 'holder',
      value: pageName ?? '',
    },
    {
      property: 'name',
      value: infoList[0].text ?? '',
    },
    ...infoList.map((i) => {
      return { property: i.property, value: i.text };
    }),
    {
      property: 'icon',
      value: icon?.url ?? '',
    },
    {
      property: 'backgroundImage',
      value: 'default',
    },
  ]);

  res.status(200).json({ message: 'ok' });
}
