import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Receipe } from '../receipe.modal';
import { ReceipesService } from '../receipes.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css'],
})
export class ReceipeListComponent implements OnInit {
  receipes: Receipe[] = [];

  // @Output('receipeWasSelected')
  // receipeWasSelected: EventEmitter<Receipe> = new EventEmitter<Receipe>();
  receipeListSubscription: Subscription;

  constructor(private receipeService: ReceipesService) {}

  ngOnInit(): void {
    this.receipes = this.receipeService.getReceipes();
    this.receipeListSubscription = this.receipeService
      .getReceipes$()
      .subscribe((receipes: Receipe[]) => (this.receipes = receipes));
  }

  // onReceipeSelected(receipe: Receipe) {
  //   this.receipeWasSelected.emit(receipe);
  // }
}
