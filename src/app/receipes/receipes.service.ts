import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Receipe } from './receipe.modal';

@Injectable()
export class ReceipesService {
  receipes: Receipe[] = [];

  private receipeListUpdated: Subject<Receipe[]> = new Subject();
  receipeListUpdated$: Observable<Receipe[]>;

  constructor(
    private shoppingListService: ShoppingListService,
    private http: HttpClient
  ) {
    // this.receipes = [
    //   new Receipe(
    //     0,
    //     'Dal Tadka',
    //     'Delecious Dat Tadka',
    //     'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',
    //     [
    //       new Ingredient('Tur Dal', 1),
    //       new Ingredient('Green Chilli', 1),
    //       new Ingredient('Onion', 22),
    //       new Ingredient('Turmeric', 33),
    //     ]
    //   ),
    //   new Receipe(
    //     1,
    //     'Samosa',
    //     'Tasty Samosa',
    //     'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-480x270.jpg',
    //     [
    //       new Ingredient('Potato', 2),
    //       new Ingredient('Maida', 1),
    //       new Ingredient('Oil', 1),
    //       new Ingredient('Green Chilli', 2),
    //     ]
    //   ),
    // ];
  }

  setReceipes(receipes: Receipe[]) {
    this.receipes = receipes;
    this.receipeListUpdated.next(this.receipes.slice());
  }

  getReceipes(): Receipe[] {
    return this.receipes.slice();
  }

  getReceipes$(): Observable<Receipe[]> {
    return this.receipeListUpdated.asObservable();
  }

  getReceipe(id: number): Receipe {
    return this.receipes[id];
  }

  addReceipe(receipe: Receipe) {
    receipe.id = this.receipes.length;
    this.receipes.push(receipe);
    this.receipeListUpdated.next(this.receipes);
  }

  updateReceipe(index: number, newReceipe: Receipe) {
    newReceipe.id = index;
    this.receipes[index] = newReceipe;
    this.receipeListUpdated.next(this.receipes.slice());
  }

  deleteReceipe(index: number) {
    this.receipes.splice(index, 1);
    this.receipeListUpdated.next(this.receipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
    this.receipeListUpdated.next(this.receipes.slice());
  }
}
