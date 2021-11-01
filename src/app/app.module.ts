import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ReceipeListComponent } from './receipes/receipe-list/receipe-list.component';
import { HeaderComponent } from './header/header.component';
import { ReceipesComponent } from './receipes/receipes.component';
import { ReceipeItemComponent } from './receipes/receipe-item/receipe-item.component';
import { ReceipeDetailComponent } from './receipes/receipe-detail/receipe-detail.component';
import { UnlessDirective } from './shared/unless.directive';
import { DropDownDirective } from './shared/dropdown.directive';
import { ReceipesService } from './receipes/receipes.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { ReceipesStartComponent } from './receipes/receipes-start/receipes-start.component';
import { ReceipeEditComponent } from './receipes/receipe-edit/receipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    ReceipeListComponent,
    HeaderComponent,
    ReceipesComponent,
    ReceipeItemComponent,
    ReceipeDetailComponent,
    UnlessDirective,
    DropDownDirective,
    ReceipesStartComponent,
    ReceipeEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  providers: [ShoppingListService, ReceipesService],
})
export class AppModule {}
