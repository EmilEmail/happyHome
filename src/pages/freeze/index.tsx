import React, { useEffect } from 'react';
import FoodLayout from '@/app/components/FoodLayout/FoodLayout';
import { PAGE_NAMES } from '@/app/components/FoodLayout/consts';

export default function Freeze() {
  return (
    <FoodLayout onFormAction={() => {}} pageName={PAGE_NAMES.Freeze}>
      <h1>Freeeze</h1>
    </FoodLayout>
  );
}
