import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient';
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
@Input() item: Ingredient;
@Output() cleared = new EventEmitter();
isAddMode = true;
  constructor(private sls: ShoppingListService) { }

  ngOnChanges(changes) {
    if(changes.item.currentValue === null){
      this.isAddMode = true;
      this.item = {name: null, amount: null};
    }else{
      this.isAddMode = false;
    }
  }

  onSubmit(ingredient: Ingredient){
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
    if(this.isAddMode){
       this.item = newIngredient;
       this.sls.addItem(this.item);
    }else{
       this.sls.editItem(this.item, newIngredient);
       this.onClear();
    }
  }

  onDelete(){
    this.sls.deleteItem(this.item);
    this.onClear();
  }

  onClear(){
    this.isAddMode = true;
    this.cleared.emit(null);
  }

}
