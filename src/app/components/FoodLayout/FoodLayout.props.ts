import { ReactNode } from 'react';
import { OnFormActionProps } from '../FormModal/interfaces';

export interface FoodLayoutProps {
  pageName: string;
  children: ReactNode | ReactNode[];
  onFormAction: (arg: OnFormActionProps) => void;
}
