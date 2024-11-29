import MainMenu from '@/app/components/menu/MainMenu';
import React, { useEffect, useState } from 'react';
import BarMenu from '@/app/components/BarMenu/BarMenu';
import { BarMenuItems } from '@/app/components/BarMenu/BarMenuItems';
import { Main } from '@/app/globals.style';
import { BAR_MENU_ITEM } from '@/app/interfaces/BAR_MENU_ITEM';
import { FoodLayoutProps } from './FoodLayout.props';

export default function FoodLayout({
  children,
  pageName,
}: FoodLayoutProps) {
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
