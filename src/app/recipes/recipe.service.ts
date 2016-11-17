import { RecipesComponent } from './recipes.component';
import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import {Recipe} from './recipe';
import {Ingredient} from '../shared/ingredient';
import 'rxjs/Rx';

@Injectable()
export class RecipeService {

recipesChanged = new EventEmitter<Recipe[]>();

recipes: Recipe[] = [
  new Recipe ('Crepe', 'Delicious crepe',  'assets/images/crepe.jpg', [
    new Ingredient('Flour', 500 ),
    new Ingredient('Milk', 200 )
  ]),
  new Recipe ('Schnitzel', 'Very tasty',  'assets/images/schnitzel.png', [
    new Ingredient('Meat', 200 ),
    new Ingredient('Salt', 50 )
  ]),
];

 constructor(private http: Http) { }

getRecipes(){
  return this.recipes;
}

getRecipe(id:number){
  return this.recipes[id];
}

deleteRecipe(recipe:Recipe){
  this.recipes.splice(this.recipes.indexOf(recipe), 1);
}

addRecipe(recipe:Recipe){
  this.recipes.push(recipe);
}

editRecipe(oldRecipe: Recipe, newRecipe:Recipe){
  this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
}

storeData(){
  const body = JSON.stringify(this.recipes);
  const headers = new Headers({
    'Content-Type': 'application/json'
  });

  return this.http.put('https://recipebook-3f0bd.firebaseio.com/recipes.json', body, {headers: headers});
}

fetchData(){
  return this.http.get('https://recipebook-3f0bd.firebaseio.com/recipes.json')
  .map((response: Response)=> response.json())
  .subscribe(
      (data: Recipe[]) => {
        this.recipes = data;
        this.recipesChanged.emit(this.recipes);
      },
      error=> console.log(error)
    );
}

}
