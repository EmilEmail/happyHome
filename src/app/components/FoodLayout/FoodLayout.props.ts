import { ReactNode } from 'react';
import { PAGE_NAMES } from './enums';

export interface FoodLayoutProps {
  pageName: PAGE_NAMES;
  children: ReactNode | ReactNode[];
}
