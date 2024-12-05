import React, { useEffect } from 'react';
import { PAGE_NAMES } from '@/app/components/FoodLayout/enums';
import FoodLayout from '@/app/components/FoodLayout/FoodLayout';

export default function Freeze() {
  const get = async () => {
    const test = await fetch('/api/test');
    const test2 = await test.json();
    console.log(test2);
  };
  useEffect(() => {
    get();
  }, []);
  return (
    <FoodLayout pageName={PAGE_NAMES.Freeze}>
      <h1>Freeeze</h1>
    </FoodLayout>
  );
}
