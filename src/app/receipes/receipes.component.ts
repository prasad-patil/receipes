import { Component, OnInit } from '@angular/core';
import { Receipe } from './receipe.modal';
import { ReceipesService } from './receipes.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css'],
})
export class ReceipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
