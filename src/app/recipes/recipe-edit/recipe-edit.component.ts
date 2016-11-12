import { Subscription } from 'rxjs/Rx';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private recipe: Recipe;
  private isNew = true;
  private recipeIndex: number;
  recipeForm:FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params:any)=> {
        if(params.hasOwnProperty('id')){
          this.isNew = false;
          this.recipeIndex = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
        }else{
          this.isNew = true;
          this.recipe = null;
        }
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  private initForm(isNew: boolean){
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent = '';
    let recipeIngredients: FormArray = new FormArray([]);

    if(this.isNew){

    }else{
      for(let i = 0; i< this.recipe.ingredients.length; i++){
        recipeIngredients.push(
          new FormGroup({
            name: new  FormControl(this.recipe.ingredients[i].name, Validators.required),
            amount:  new  FormControl(this.recipe.ingredients[i].amount, [Validators.required, Validators.pattern("\\d+")])
          })
        );
      }

      recipeName = this.recipe.name;
      recipeImageUrl = this.recipe.imagePath;
      recipeContent = this.recipe.description;
    }

      this.recipeForm = this.formBuilder.group({
           name: [recipeName, Validators.required],
           imagePath : [recipeImageUrl, Validators.required],
           description : [recipeContent, Validators.required],
           ingredients: recipeIngredients
      });

  }

}
