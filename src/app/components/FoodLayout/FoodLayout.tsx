import MainMenu from '@/app/components/menu/MainMenu';
import React, { ReactNode, useEffect, useState } from 'react';
import BarMenu from '@/app/components/BarMenu/BarMenu';
import {
  BAR_MENU_ITEM,
  BarMenuItems,
} from '@/app/components/BarMenu/BarMenuItems';
import { Main } from '@/app/globals.style';

export enum PAGE_NAMES {
  Freeze = 'Freeze',
  Fridge = 'Fridge',
  Pantry = 'Pantry',
}

interface Props {
  pageName: PAGE_NAMES;
  children: ReactNode | ReactNode[];
}

export default function FoodLayout({ children, pageName }: Props) {
  const [activeBarMenuItem, setActiveBarMenuItem] =
    useState<BAR_MENU_ITEM>();

  useEffect(() => {
    const barMenuItem = BarMenuItems.find((i) => i.name === pageName);
    if (barMenuItem) {
      setActiveBarMenuItem(barMenuItem);
    }
  }, [pageName]);
  return (
    <Main>
      {activeBarMenuItem && (
        <BarMenu activeBarMenuItem={activeBarMenuItem} />
      )}
      <MainMenu />
      {children}
    </Main>
  );
}
