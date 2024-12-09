import { BAR_MENU_ITEM } from '@/app/interfaces/BAR_MENU_ITEM';
import { COLORS } from '@/app/utils/Colors';

export const BarMenuItems: BAR_MENU_ITEM[] = [
  {
    name: 'freezer',
    href: '/freezer',
    bgColor: COLORS.freezerBg,
    color: COLORS.freezerColor,
  },
  {
    name: 'fridge',
    href: '/fridge',
    bgColor: COLORS.fridgeBg,
    color: COLORS.fridgeColor,
  },
  {
    name: 'pantry',
    href: '/pantry',
    bgColor: COLORS.PantryBg,
    color: COLORS.PantryColor,
  },
];
