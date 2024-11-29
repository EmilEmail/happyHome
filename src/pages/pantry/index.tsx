import { PAGE_NAMES } from '@/app/components/FoodLayout/enums';
import FoodLayout from '@/app/components/FoodLayout/FoodLayout';
import React from 'react';

export default function Pantry() {
  return (
    <FoodLayout pageName={PAGE_NAMES.Pantry}>
      <h1>Paaantry</h1>
    </FoodLayout>
  );
}
