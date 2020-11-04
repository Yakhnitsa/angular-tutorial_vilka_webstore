export class Product {
  public id: number;
  public name: string;
  public description: string;
  public mass: number;
  public price: number;
  public basicNutrients: {
      proteins: number;
      fats: number;
      carbons: number;
    };
  public calories: number;
  public otherNutrients: Nutrient[];
  public icon: string;
}
export class Nutrient{
  constructor(
    public type: string,
    public quantity: number
  ){}
}
