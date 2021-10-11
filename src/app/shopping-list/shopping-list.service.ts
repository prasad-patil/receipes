import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredients.model';

@Injectable()
export class ShoppingListService {
  ingredientsListChanged: Subject<Ingredient[]>;
  ingredients: Ingredient[] = [
    new Ingredient('apple', 60),
    new Ingredient('ginger', 50),
  ];

  constructor() {
    this.ingredientsListChanged = new Subject<Ingredient[]>();
  }

  getList() {
    // sending the copy of the ingredients array.
    return this.ingredients.slice();
  }

  addIngredient(ingredeint: Ingredient) {
    this.ingredients.push(ingredeint);
    this.ingredientsListChanged.next(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsListChanged.next(this.ingredients);
  }
}
