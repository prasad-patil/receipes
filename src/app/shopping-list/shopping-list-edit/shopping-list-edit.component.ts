import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  // @Output('onIngredientAdd') addIngredient: EventEmitter<Ingredient> =
  //   new EventEmitter<Ingredient>();

  @ViewChild('ingredient') ingredientRef: ElementRef;
  @ViewChild('amount') amountRef: ElementRef;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  addItem(event: Event) {
    event.preventDefault();
    // this.addIngredient.emit(
    //   new Ingredient(
    //     this.ingredientRef.nativeElement.value,
    //     this.ingredientRef.nativeElement.value
    //   )
    // );
    this.shoppingListService.addIngredient(
      new Ingredient(
        this.ingredientRef.nativeElement.value,
        this.amountRef.nativeElement.value
      )
    );
  }

  clearItem() {
    this.ingredientRef.nativeElement.value = '';
    this.amountRef.nativeElement.value = '';
  }
}
