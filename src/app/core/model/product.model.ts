export class Product {
    id: number;
    name: string;
    description: string;
    mass: number;
    price: number;
    basicNutrients: {
      protein: Nutrient;
      fat: Nutrient;
      carbon: Nutrient;
    };
    calories: number;
    otherNutrients: Nutrient[];
    icon: string;
}
export class Nutrient{
  name: string;
  mass: number;
  constructor(
    name: string,
    mass: number
  ){}
}
