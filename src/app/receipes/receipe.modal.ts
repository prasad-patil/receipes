import { Ingredient } from '../shared/ingredients.model';

export class Receipe {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];
  constructor(
    id: number,
    name: string,
    description: string,
    imagePath: string,
    ingredient: Ingredient[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredient;
  }
}
