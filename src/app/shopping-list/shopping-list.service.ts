import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredients.model';

@Injectable()
export class ShoppingListService {
  editIngredientSubject: Subject<number>;

  ingredientsListChanged: Subject<Ingredient[]>;
  ingredients: Ingredient[] = [
    // new Ingredient('apple', 60),
    // new Ingredient('ginger', 50),
  ];

  constructor() {
    this.ingredientsListChanged = new Subject<Ingredient[]>();
    this.editIngredientSubject = new Subject<number>();
  }

  getList() {
    // sending the copy of the ingredients array.
    return this.ingredients.slice();
  }

  addIngredient(ingredeint: Ingredient) {
    this.ingredients.push(ingredeint);
    this.ingredientsListChanged.next(this.ingredients);
  }

  getIngredientObservable(): Observable<number> {
    return this.editIngredientSubject.asObservable();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsListChanged.next(this.ingredients);
  }

  ingredientCliked(index: number) {
    this.editIngredientSubject.next(index);
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  editIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientsListChanged.next(this.ingredients);
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsListChanged.next(this.ingredients);
  }
}
