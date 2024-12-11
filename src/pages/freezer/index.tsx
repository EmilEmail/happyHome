import '@/app/globals.css';
import FoodLayout from '@/app/components/FoodLayout/FoodLayout';
import { Platform, ShelfImage } from '@/app/globals.style';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FOOD_CATEGORY_INTERFACE } from '@/app/interfaces/FOOD_CATEGORY_INTERFACE';
import Link from 'next/link';
import { OnFormActionProps } from '@/app/components/FormModal/interfaces';
import { PAGE_NAMES } from '@/app/components/FoodLayout/consts';
import { CountCircle } from '@/app/components/CountCircle/CountCircle';
import Shelf from '@/app/assets/svg/freezer_shelf.svg';

export default function Freezer() {
  const [categoryList, setCategoryList] = useState<
    FOOD_CATEGORY_INTERFACE[]
  >([]);
  const asyncFunction = async () => {
    const response = await fetch('/api/get/food_categories', {
      method: 'POST',
      body: JSON.stringify({ pageName: PAGE_NAMES.Freezer }),
    });
    const res = await response.json();
    setCategoryList(res.data);
  };
  useEffect(() => {
    asyncFunction();
  }, []);

  const onFormAction = async (data: OnFormActionProps) => {
    const response = await fetch('/api/create/category', {
      method: 'POST',
      body: JSON.stringify({ ...data, pageName: PAGE_NAMES.Freezer }),
    });
    const responseData = await response.json();
    if (responseData) {
      asyncFunction();
    }
  };

  const createPlatform = (foodList: FOOD_CATEGORY_INTERFACE[]) => {
    let list: FOOD_CATEGORY_INTERFACE[] = [];
    const renderList: FOOD_CATEGORY_INTERFACE[][] = [];
    foodList.forEach((food, i) => {
      if (i === renderList.length * 4) {
        renderList.push(list);
        list = [];
      }
      list.push(food);
    });
    if (list.length) {
      renderList.push(list);
    }

    return renderList.map((food, key) => (
      <Platform key={key}>
        {food.map((item, i) => (
          <Link key={i} href={`/food/${item.name}`}>
            <div>
              <CountCircle>{item.itemCount}</CountCircle>
              <p className="item-name">{item.label}</p>
              {item.icon && (
                <Image
                  src={item.icon}
                  height={48}
                  width={48}
                  alt="icon"
                  style={{ marginBottom: '-4px' }}
                />
              )}
            </div>
          </Link>
        ))}
        <ShelfImage src={Shelf} alt="shelf" />
      </Platform>
    ));
  };
  return (
    <FoodLayout
      pageName={PAGE_NAMES.Freezer}
      onFormAction={onFormAction}
    >
      {categoryList && createPlatform(categoryList)}
    </FoodLayout>
  );
}
