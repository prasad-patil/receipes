import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceipeDetailComponent } from './receipes/receipe-detail/receipe-detail.component';
import { ReceipeEditComponent } from './receipes/receipe-edit/receipe-edit.component';
import { ReceipesStartComponent } from './receipes/receipes-start/receipes-start.component';
import { ReceipesComponent } from './receipes/receipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/receipes',
    pathMatch: 'full',
  },
  {
    path: 'receipes',
    component: ReceipesComponent,
    children: [
      {
        path: '',
        component: ReceipesStartComponent,
      },
      {
        path: 'create',
        component: ReceipeEditComponent,
      },
      {
        path: ':id',
        component: ReceipeDetailComponent,
      },
      {
        path: ':id/edit',
        component: ReceipeEditComponent,
      },
    ],
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
