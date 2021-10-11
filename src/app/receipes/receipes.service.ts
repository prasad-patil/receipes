import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Receipe } from './receipe.modal';

@Injectable()
export class ReceipesService {
  receipes: Receipe[] = [];

  selectedReceipe: EventEmitter<Receipe>;

  constructor(private shoppingListService: ShoppingListService) {
    this.receipes = [
      new Receipe(
        0,
        'Dal Tadka',
        'Delecious Dat Tadka',
        'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',
        [
          new Ingredient('Tur Dal', 1.5),
          new Ingredient('Green Chilli', 1.5),
          new Ingredient('Onion', 0.5),
          new Ingredient('Turmeric', 0.25),
        ]
      ),
      new Receipe(
        1,
        'Samosa',
        'Tasty Samosa',
        'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-480x270.jpg',
        [
          new Ingredient('Potato', 2),
          new Ingredient('Maida', 1),
          new Ingredient('Oil', 1.5),
          new Ingredient('Green Chilli', 0.25),
        ]
      ),
    ];

    this.selectedReceipe = new EventEmitter<Receipe>();
  }

  getReceipes(): Receipe[] {
    return this.receipes;
  }

  getReceipe(id: number): Receipe {
    return this.receipes[id];
  }

  addReceipe(receipe: Receipe) {
    this.receipes.push(receipe);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
