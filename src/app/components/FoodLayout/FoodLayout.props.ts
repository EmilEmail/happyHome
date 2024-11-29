import { ReactNode } from 'react';
import { PAGE_NAMES } from './enums';

export interface Props {
  pageName: PAGE_NAMES;
  children: ReactNode | ReactNode[];
}
