import { BAR_MENU_ITEM } from '@/app/interfaces/BAR_MENU_ITEM';
import { COLORS } from '@/app/utils/Colors';
import { PAGE_NAMES } from '../FoodLayout/consts';

export const BarMenuItems: BAR_MENU_ITEM[] = [
  {
    name: PAGE_NAMES.Pantry,
    href: '/pantry',
    bgColor: COLORS.PantryBg,
    color: COLORS.PantryColor,
    icon: '/svg/holders/pantry.svg',
  },
  {
    name: PAGE_NAMES.Fridge,
    href: '/fridge',
    bgColor: COLORS.fridgeBg,
    color: COLORS.fridgeColor,
    icon: '/svg/holders/fridge.svg',
  },
  {
    name: PAGE_NAMES.Freezer,
    href: '/freezer',
    bgColor: COLORS.freezerBg,
    color: COLORS.freezerColor,
    icon: '/svg/holders/freezer.svg',
  },
];
