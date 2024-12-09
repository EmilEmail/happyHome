import React from 'react';
import { BarMenuItems } from './BarMenuItems';
import {
  ActiveMenuItem,
  MenuItem,
  BarMenuWrapper,
} from './BarMenu.style';
import { BAR_MENU_ITEM } from '@/app/interfaces/BAR_MENU_ITEM';
import { PAGE_NAMES } from '../FoodLayout/consts';
import { COLORS } from '@/app/utils/Colors';

interface Props {
  activeBarMenuItem: BAR_MENU_ITEM;
  pageName: string;
}

export default function BarMenu({
  activeBarMenuItem,
  pageName,
}: Props) {
  const getColor = () => {
    if (pageName === PAGE_NAMES.Freezer) {
      return COLORS.freezerColor;
    }
    if (pageName === PAGE_NAMES.Fridge) {
      return COLORS.fridgeColor;
    }
    if (pageName === PAGE_NAMES.Pantry) {
      return COLORS.PantryColor;
    }
  };
  const renderItem = (item: BAR_MENU_ITEM, key: number) => {
    if (item.name === activeBarMenuItem.name) {
      return (
        <ActiveMenuItem
          key={key}
          href={item.href}
          style={{
            background: item.bgColor,
            color: item.color,
            border: `4px solid ${item.color}`,
          }}
        >
          {item.name}
        </ActiveMenuItem>
      );
    } else {
      return (
        <MenuItem
          key={key}
          href={item.href}
          style={{
            background: item.bgColor,
            color: item.color,
            borderBottom: `4px solid ${getColor()}`,
          }}
        >
          {item.name}
        </MenuItem>
      );
    }
  };
  return (
    <BarMenuWrapper>
      {BarMenuItems.map((item, key) => renderItem(item, key))}
    </BarMenuWrapper>
  );
}
