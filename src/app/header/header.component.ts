import { Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { AuthService } from './../shared/auth.service';
import { RecipeService } from './../recipes/recipe.service';
import { Recipe } from './../recipes/recipe';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnDestroy{

 isAuthenticated = false;
 private  subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private authService: AuthService,
              private router:Router) { 
                this.subscription = this.authService.isAuthenticated().subscribe(
                  authStatus => this.isAuthenticated = authStatus
                );
              }

  onStore(){
    this.recipeService.storeData().subscribe(
      data=> console.log(data),
      error=> console.log(error)
    );
  }

  onFetch(){
    this.recipeService.fetchData();
  }

  onLogout(){
    var headerObj = this;
    this.authService.logout()
    .then(function(){
      headerObj.router.navigate(['/signin']);
    })
    .catch(function(error){
      console.log(error)
    });
  }

  authenticated(){
    return this.isAuthenticated;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
