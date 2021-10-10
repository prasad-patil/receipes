import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { Receipe } from '../receipe.modal';
import { ReceipesService } from '../receipes.service';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css'],
})
export class ReceipeDetailComponent implements OnInit, OnChanges {
  @Input('receipe')
  receipe: Receipe;

  constructor(private receipeService: ReceipesService) {}

  ngOnInit(): void {}

  ngOnChanges(change: SimpleChanges) {
    console.log(this.receipe);
    console.log('changes', change);
  }

  onShoppingListClick() {
    this.receipeService.addIngredientsToShoppingList(this.receipe.ingredients);
  }
}
