import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Injectable()
export class ShoppingListService {
  ingredientsListChanged: EventEmitter<Ingredient[]>;
  ingredients: Ingredient[] = [
    new Ingredient('apple', 60),
    new Ingredient('ginger', 50),
  ];

  constructor() {
    this.ingredientsListChanged = new EventEmitter<Ingredient[]>();
  }

  getList() {
    // sending the copy of the ingredients array.
    return this.ingredients.slice();
  }

  addIngredient(ingredeint: Ingredient) {
    this.ingredients.push(ingredeint);
    this.ingredientsListChanged.emit(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsListChanged.emit(this.ingredients);
  }
}
