import { RouterModule } from "@angular/router";
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { recipeRoutes } from './recipes/recipe.routes';

const ROUTES = [
      { path: '', redirectTo: '/recipes', pathMatch: 'full' },
      { path: 'recipes', component: RecipesComponent, children: recipeRoutes },
      { path: 'shopping-list', component: ShoppingListComponent }
    ];

export const routing = RouterModule.forRoot(ROUTES);