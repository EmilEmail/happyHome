import styled from '@emotion/styled';
import React from 'react';
import { BAR_MENU_ITEM, BarMenuItems } from './BarMenuItems';
import Link from 'next/link';

const BarMenuWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: aqua;

  position: fixed;
  top: 0;
  left: 0;
`;

const MenuItem = styled(Link)`
  width: 100%;
  padding: 1rem;
  background-color: black;
  text-align: center;
  text-decoration: none;
  color: white;
`;
const ActiveMenuItem = styled(MenuItem)`
  background-color: red;
`;

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
