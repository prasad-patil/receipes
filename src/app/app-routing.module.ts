import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
