import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Receipe } from '../receipe.modal';
import { ReceipesService } from '../receipes.service';

@Component({
  selector: 'app-receipe-edit',
  templateUrl: './receipe-edit.component.html',
  styleUrls: ['./receipe-edit.component.css'],
})
export class ReceipeEditComponent implements OnInit {
  editMode: boolean = false;
  receipe: Receipe;
  constructor(
    private route: ActivatedRoute,
    private receipeService: ReceipesService
  ) {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.receipe = this.receipeService.getReceipe(+params['id']);
        this.editMode = true;
      }
      console.log(this.editMode);
    });
  }

  ngOnInit(): void {}
}
