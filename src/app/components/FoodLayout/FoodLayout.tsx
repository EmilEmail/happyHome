import MainMenu from '@/app/components/menu/MainMenu';
import React, { useEffect, useState } from 'react';
import BarMenu from '@/app/components/BarMenu/BarMenu';
import { BarMenuItems } from '@/app/components/BarMenu/BarMenuItems';
import { Main } from '@/app/globals.style';
import { BAR_MENU_ITEM } from '@/app/interfaces/BAR_MENU_ITEM';
import { FoodLayoutProps } from './FoodLayout.props';
import { COLORS } from '@/app/utils/Colors';

export default function FoodLayout({
  children,
  pageName,
  onFormAction,
}: FoodLayoutProps) {
  const [activeBarMenuItem, setActiveBarMenuItem] =
    useState<BAR_MENU_ITEM>();

  useEffect(() => {
    const barMenuItem = BarMenuItems.find((i) => i.name === pageName);
    if (barMenuItem) {
      setActiveBarMenuItem(barMenuItem);
    }
  }, [pageName]);

  const getBgColor = () => {
    switch (pageName) {
      case BarMenuItems[0].name:
        return COLORS.freezerBg;
      case BarMenuItems[1].name:
        return COLORS.fridgeBg;
      case BarMenuItems[2].name:
        return COLORS.PantryBg;
    }
  };

  return (
    <Main style={{ backgroundColor: getBgColor() }}>
      {activeBarMenuItem && (
        <BarMenu activeBarMenuItem={activeBarMenuItem} />
      )}
      <MainMenu
        pageName={pageName}
        camera={false}
        onFormAction={onFormAction}
      />
      {children}
    </Main>
  );
}
