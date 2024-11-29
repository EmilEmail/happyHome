import { PAGE_NAMES } from '@/app/components/FoodLayout/enums';
import FoodLayout from '@/app/components/FoodLayout/FoodLayout';
import React from 'react';

export default function Freeze() {
  return (
    <FoodLayout pageName={PAGE_NAMES.Freeze}>
      <h1>Freeeze</h1>
    </FoodLayout>
  );
}
