import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Subscription} from 'rxjs/Rx';
import {Recipe} from '../recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})

export class RecipeDetailComponent implements OnInit {

 private subscription: Subscription;
 private recipeIndex: number;
 selectedRecipe: Recipe;


  constructor(private sls: ShoppingListService, 
  private route: ActivatedRoute,
  private router:Router,
  private recipeService: RecipeService ) { }

 
  ngOnInit() {
   this.subscription = this.route.params.subscribe(
    (params: any) => {
      this.recipeIndex =  params['id'];
      this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
    }  
   );

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onAddToShoppingList(){
    this.sls.setItems(this.selectedRecipe.ingredients);
  }

  onEdit(){
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

}


