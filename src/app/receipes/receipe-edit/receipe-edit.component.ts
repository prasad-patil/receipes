import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredients.model';
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
  receipeForm: FormGroup;
  receipeId: number;
  constructor(
    private route: ActivatedRoute,
    private receipeService: ReceipesService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.receipeId = +params['id'];
        this.receipe = this.receipeService.getReceipe(this.receipeId);
        this.editMode = true;
      }
      this.initForm();
      console.log(this.editMode);
    });
    this.initForm();
  }

  initForm() {
    let receipeName: string = '';
    let receipeImagePath: string = '';
    let receipeDescription: string = '';
    let receipeIngredients: FormArray = new FormArray([]);
    if (this.editMode && this.receipe) {
      receipeName = this.receipe.name;
      receipeDescription = this.receipe.description;
      receipeImagePath = this.receipe.imagePath;
      if (this.receipe.ingredients.length > 0) {
        for (const { name, amount } of this.receipe.ingredients) {
          receipeIngredients.push(
            this.fb.group({
              name: [name, [Validators.required]],
              amount: [
                amount,
                [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')],
              ],
            })
          );
        }
      }
    }
    this.receipeForm = this.fb.group({
      name: [receipeName, [Validators.required]],
      description: [receipeDescription, [Validators.required]],
      imagePath: [receipeImagePath, [Validators.required]],
      ingredients: receipeIngredients,
    });
    // if (this.editMode) {
    //   if (this.receipe.ingredients.length > 0) {
    //     this.receipe.ingredients.forEach(({ name, amount }: Ingredient) => {
    //       this.addAnotherIngredientsFormGroup(name, amount);
    //     });
    //   }
    // }
  }

  get ingredientFormGroupArray(): FormArray {
    return this.receipeForm.get('ingredients') as FormArray;
  }

  ngOnInit(): void {}

  addAnotherIngredientsFormGroup(
    name: string = '',
    amount: number | '' = ''
  ): FormGroup {
    return this.fb.group({
      name: [name, [Validators.required]],
      amount: [
        amount,
        [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')],
      ],
    });
  }

  addIngredient(e: Event): void {
    e.preventDefault();
    this.ingredientFormGroupArray.push(this.addAnotherIngredientsFormGroup());
  }

  deleteIngredient(e: Event, index: number) {
    e.preventDefault();
    this.ingredientFormGroupArray.removeAt(index);
  }

  submit() {
    console.log(this.receipeForm.value);
    if (this.editMode) {
      this.receipeService.updateReceipe(this.receipeId, this.receipeForm.value);
    } else {
      this.receipeService.addReceipe(this.receipeForm.value);
    }
    this.router.navigate(['/receipes']);
  }
}
