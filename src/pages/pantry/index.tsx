import { PAGE_NAMES } from '@/app/components/FoodLayout/consts';
import FoodLayout from '@/app/components/FoodLayout/FoodLayout';
import React from 'react';

export default function Pantry() {
  return (
    <FoodLayout onFormAction={() => {}} pageName={PAGE_NAMES.Pantry}>
      <h1>Paaantry</h1>
    </FoodLayout>
  );
}
