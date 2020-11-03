export class Product {
  public id: number;
  public name: string;
  public description: string;
  public mass: number;
  public price: number;
  public basicNutrients: {
      protein: Nutrient;
      fat: Nutrient;
      carbon: Nutrient;
    };
  public calories: number;
  public otherNutrients: Nutrient[];
  public icon: string;
}
export class Nutrient{
  constructor(
    public name: string,
    public mass: number
  ){}
}
