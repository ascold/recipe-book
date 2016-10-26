import { RouterModule } from "@angular/router";
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const ROUTES = [
      { path: '', redirectTo: '/recipes', pathMatch: 'full' },
      { path: 'recipes', component: RecipesComponent },
      { path: 'shopping-list', component: ShoppingListComponent }
    ];

export const routing = RouterModule.forRoot(ROUTES);