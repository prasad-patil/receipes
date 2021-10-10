import { Component, OnInit } from '@angular/core';
import { Receipe } from './receipe.modal';
import { ReceipesService } from './receipes.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css'],
  providers: [ReceipesService],
})
export class ReceipesComponent implements OnInit {
  constructor(private receipeService: ReceipesService) {}

  selectedReceipe: Receipe;

  ngOnInit(): void {
    this.receipeService.selectedReceipe.subscribe(
      (receipe: Receipe) => (this.selectedReceipe = receipe)
    );
  }

  // onReceipeSelected(receipe: Receipe) {
  //   this.selectedReceipe = receipe;
  // }
}
