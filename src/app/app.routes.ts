import { AuthGardService } from './shared/auth-gard.service';
import { SignupComponent } from './authentication/signup/signup.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { RouterModule } from "@angular/router";
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { recipeRoutes } from './recipes/recipe.routes';

const ROUTES = [
      { path: '', redirectTo: '/signin', pathMatch: 'full' },
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'recipes', component: RecipesComponent, children: recipeRoutes, canActivate: [AuthGardService] },
      { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGardService] }
    ];

export const routing = RouterModule.forRoot(ROUTES);