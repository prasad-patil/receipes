import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Receipe } from '../receipe.modal';
import { ReceipesService } from '../receipes.service';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css'],
})
export class ReceipeDetailComponent implements OnInit {
  receipe: Receipe;

  constructor(
    private receipeService: ReceipesService,
    private router: Router,
    private route: ActivatedRoute,
    private shoppingListServie: ShoppingListService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.receipe = this.receipeService.getReceipe(+id);
    });
  }

  onShoppingListClick() {
    this.receipeService.addIngredientsToShoppingList(this.receipe.ingredients);
  }

  onDeleteClicked() {
    this.receipeService.deleteReceipe(this.receipe.id);
    this.router.navigate(['/receipes']);
  }

  onToShoppingListClicked() {
    this.shoppingListServie.addIngredients(this.receipe.ingredients);
    this.router.navigate(['/shopping-list']);
  }
}
