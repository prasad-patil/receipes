import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
    private route: ActivatedRoute
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
}
