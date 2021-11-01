import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  editMode: Boolean = false;
  editIngredientIndex: number;
  ingredientSubscription: Subscription;

  @ViewChild('ingredientForm', { static: false }) ingredientForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredientSubscription = this.shoppingListService
      .getIngredientObservable()
      .subscribe((index: number) => {
        this.editMode = true;
        this.editIngredientIndex = index;
        let ingredient = this.shoppingListService.getIngredient(index);
        if (ingredient) {
          this.ingredientForm.form.setValue({
            ...ingredient,
          });
        }
      });
  }

  onSubmit({ name, amount }: Ingredient) {
    this.editMode
      ? this.shoppingListService.editIngredient(
          this.editIngredientIndex,
          new Ingredient(name, amount)
        )
      : this.shoppingListService.addIngredient(new Ingredient(name, amount));
    this.clearItem();
  }

  clearItem() {
    // this.ingredientRef.nativeElement.value = '';
    // this.amountRef.nativeElement.value = '';
    this.ingredientForm.form.reset();
    this.editMode = false;
    this.editIngredientIndex = -1;
  }

  deleteItem() {
    this.shoppingListService.deleteIngredient(this.editIngredientIndex);
    this.clearItem();
  }

  ngOnDestroy() {
    this.ingredientSubscription.unsubscribe();
  }
}
