import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class ShoppingListService {



private items : Ingredient[] = [];

  constructor() { 
    
  }

getItems(){
  return this.items;
}

setItems(ingredients: Ingredient[]){
  // ingredients.forEach(function(entry) {
  //  if(that.items.indexOf(entry) === -1){
   //    that.items.push(entry);
  //  }
  //});

  Array.prototype.push.apply(this.items, ingredients);
}

}
