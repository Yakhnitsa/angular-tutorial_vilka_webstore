export class Product {
  public id: number;
  public type: ProductType;
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
export enum ProductType{
  MEAT,
  FISH,
  POULTRY,
  CEREALS,
  PASTA,
  FRUITS,
  VEGETABLES,
  BEANS,
  NUTS,
  MILK,
  EGGS,
  SPICES,
  SUPPLEMENTS,
  WATER,
  OTHER
}
