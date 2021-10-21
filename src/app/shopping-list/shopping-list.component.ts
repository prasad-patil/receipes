import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  ingredientsListSubscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getList();
    this.ingredientsListSubscription =
      this.shoppingListService.ingredientsListChanged.subscribe(
        (ing: Ingredient[]) => (this.ingredients = ing)
      );
  }

  ngOnDestroy() {
    this.ingredientsListSubscription.unsubscribe();
  }

  onIngredientClick(event: Event, index: number) {
    event.preventDefault();
    this.shoppingListService.ingredientCliked(index);
  }
}
