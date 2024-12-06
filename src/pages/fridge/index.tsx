import '@/app/globals.css';
import FoodLayout from '@/app/components/FoodLayout/FoodLayout';
import { Platform } from '@/app/globals.style';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FOOD_CATEGORY_INTERFACE } from '@/app/interfaces/FOOD_CATEGORY_INTERFACE';
import Link from 'next/link';
import styled from '@emotion/styled';
import { OnFormActionProps } from '@/app/components/FormModal/interfaces';
import { PAGE_NAMES } from '@/app/components/FoodLayout/consts';

const CountCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid black;
  background-color: red;
  color: white;
`;

export default function Fridge() {
  const [categoryList, setCategoryList] = useState<
    FOOD_CATEGORY_INTERFACE[]
  >([]);
  const asyncFunction = async () => {
    const response = await fetch('/api/get/food_categories');
    const res = await response.json();
    setCategoryList(res.data);
  };
  useEffect(() => {
    asyncFunction();
  }, []);

  const onFormAction = async (data: OnFormActionProps) => {
    const response = await fetch('/api/create/category', {
      method: 'POST',
      body: JSON.stringify(data),
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
          <Link key={i} href={`/fridge/${item.name}`}>
            <div>
              <CountCircle>{item.itemCount}</CountCircle>
              <p className="item-name">{item.label}</p>
              {item.icon && (
                <Image
                  src={item.icon}
                  height={48}
                  width={48}
                  alt="icon"
                />
              )}
            </div>
          </Link>
        ))}
        <div className="stand" />
      </Platform>
    ));
  };
  return (
    <FoodLayout
      pageName={PAGE_NAMES.Fridge}
      onFormAction={onFormAction}
    >
      {categoryList && createPlatform(categoryList)}
    </FoodLayout>
  );
}
