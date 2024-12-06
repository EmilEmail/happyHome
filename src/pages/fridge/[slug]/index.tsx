'use client';
import '@/app/globals.css';
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { FOOD_ITEM_INTERFACE } from '@/app/mock_data/FOOD_ITEM_LIST_MOCK';
import MainMenu from '@/app/components/menu/MainMenu';
import { OnFormActionProps } from '@/app/components/FormModal/interfaces';

const LayoutWrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  background-color: aqua;
  text-align: center;
  min-height: 100vh;
`;

const Header1 = styled.h1`
  &::first-letter {
    text-transform: capitalize;
  }
`;
const Header2 = styled.h2`
  &::first-letter {
    text-transform: capitalize;
  }
`;

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 50px 1fr;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background-color: beige;
  border: 1px solid gray;
  text-align: left;
`;

interface ResponseData {
  message: string;
  data?: FOOD_ITEM_INTERFACE[];
  backgroundImage?: string;
}

export default function CategoryLayout() {
  const [allItems, setAllItems] = useState<FOOD_ITEM_INTERFACE[]>([]);
  const [category, setCategory] = useState<string>('');
  const [holderName, setHolderName] = useState<string>('');
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  const TableNames = {
    food_categories: 'food_categories',
    food_items: 'food_items',
  };

  const onFormAction = async (body: OnFormActionProps) => {
    try {
      const response = await fetch(
        'http://localhost:3000/api/create/food_item',
        {
          method: 'POST',
          body: JSON.stringify({ ...body, category }),
        }
      );
      const responseData = await response.json();
      if (responseData.message === 'ok') {
        window.location.reload();
      }
    } catch (error) {
      //TODO: felhantering!
      console.log(error);
    }
  };

  const fetchData = async () => {
    const path = window.location.pathname.replaceAll('%20', ' ');
    const columnName = path?.split('/')[2];
    const holderName = path?.split('/')[1];
    setCategory(columnName);
    setHolderName(holderName);

    const res = await fetch(`/api/get/food_items_by_name`, {
      method: 'POST',
      body: JSON.stringify({
        tableName: TableNames.food_items,
        columnName,
      }),
    });
    const response = (await res.json()) as ResponseData;
    if (response.data) {
      setAllItems(response.data);
    }
    if (response.backgroundImage) {
      setBackgroundImage(response.backgroundImage);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <LayoutWrapper
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : 'unset',
      }}
    >
      <Header1>{holderName && holderName}</Header1>
      <Header2>{category && category}</Header2>
      {allItems &&
        allItems.map((item, i) => (
          <ItemWrapper key={i}>
            <p>{item.name}</p>
            <p>{item.amount}st</p>
            <p>{item.expired}</p>
          </ItemWrapper>
        ))}
      <MainMenu
        pageName={'item'}
        camera={false}
        onFormAction={onFormAction}
      />
    </LayoutWrapper>
  );
}
