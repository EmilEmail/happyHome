import React from 'react';
import { BarMenuItems } from './BarMenuItems';
import {
  ActiveMenuItem,
  MenuItem,
  BarMenuWrapper,
} from './BarMenu.style';
import { BAR_MENU_ITEM } from '@/app/interfaces/BAR_MENU_ITEM';

interface Props {
  activeBarMenuItem: BAR_MENU_ITEM;
}

export default function BarMenu({ activeBarMenuItem }: Props) {
  const renderItem = (item: BAR_MENU_ITEM, key: number) => {
    if (item.name === activeBarMenuItem.name) {
      return (
        <ActiveMenuItem key={key} href={item.href}>
          {item.name}
        </ActiveMenuItem>
      );
    } else {
      return (
        <MenuItem key={key} href={item.href}>
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
