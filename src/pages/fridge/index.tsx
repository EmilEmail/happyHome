import { FOOD_LIST_MOCK } from '@/app/assets/mock_data/FOOD_LIST';
import FoodLayout from '@/app/components/FoodLayout/FoodLayout';
import { Platform } from '@/app/globals.style';
import { FOOD_INTERFACE } from '@/app/interfaces/FOOD_INTERFACE';
import React from 'react';
import Image from 'next/image';
import { PAGE_NAMES } from '@/app/components/FoodLayout/enums';

export default function Fridge() {
  const createPlatform = (foodList: FOOD_INTERFACE[]) => {
    let list: FOOD_INTERFACE[] = [];
    const renderList: FOOD_INTERFACE[][] = [];
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
          <div key={i}>
            <p className="item-name">{item.name}</p>
            {item.icon && (
              <Image
                src={item.icon}
                height={48}
                width={48}
                alt="icon"
              />
            )}
          </div>
        ))}
        <div className="stand" />
      </Platform>
    ));
  };
  return (
    <FoodLayout pageName={PAGE_NAMES.Fridge}>
      {createPlatform(FOOD_LIST_MOCK)}
    </FoodLayout>
  );
}
