import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Receipe } from '../receipe.modal';
import { ReceipesService } from '../receipes.service';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css'],
})
export class ReceipeItemComponent implements OnInit {
  @Input('receipe')
  receipe: Receipe;

  // @Output('onReceipeSelected')
  // onReceipeSelected: EventEmitter<Receipe> = new EventEmitter<Receipe>();

  constructor(private receipeService: ReceipesService) {}

  ngOnInit(): void {}

  onSelected(receipe: Receipe) {
    this.receipeService.selectedReceipe.emit(receipe);
  }
}
