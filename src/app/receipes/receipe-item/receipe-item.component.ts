import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { Receipe } from '../receipe.modal';
import { ReceipesService } from '../receipes.service';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css'],
})
export class ReceipeItemComponent implements OnInit, OnChanges {
  @Input('id')
  id: number | undefined;

  receipe: Receipe;
  constructor(private receipeService: ReceipesService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.id !== undefined) {
      this.receipe = this.receipeService.getReceipe(this.id);
    }
  }
}
