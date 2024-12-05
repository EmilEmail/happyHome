type category = '' | 'Fridge' | 'Freeze' | 'Pantry';

export interface food_category_interface {
  name: string;
  category: category;
  icon: number;
  background: 0;
}

export const food_category: food_category_interface = {
  name: '',
  category: '',
  icon: 0,
  background: 0,
};
