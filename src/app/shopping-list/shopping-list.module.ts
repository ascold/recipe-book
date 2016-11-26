import { ShoppingListAddComponent } from './shopping-list-add/shopping-list-add.component';
import { ShoppingListComponent } from './shopping-list.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule
  ],
  declarations: [
    ShoppingListComponent,
    ShoppingListAddComponent
  ]
})
export class ShoppingListModule { }
