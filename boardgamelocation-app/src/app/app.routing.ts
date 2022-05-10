import { RouterModule, Routes } from "@angular/router";
import { GameCatalogComponent } from "./gameCatalog/game-catalog/game-catalog.component";
import { GameDetailUpdateComponent } from "./gameCatalog/game-detail-update/game-detail-update.component";
import { GameFormComponent } from "./gameCatalog/game-form/game-form.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UserFormComponent } from "./userManager/user-form/user-form.component";
import { UserComponent } from "./userManager/user/user.component";
import { UsersComponent } from "./userManager/users/users.component";



const APP_ROUTES: Routes = [
    {path: 'catalog', component: GameCatalogComponent},
    {path: 'catalog/new', component: GameFormComponent},
    {path: 'catalog/:id', component: GameDetailUpdateComponent},
    {path: 'users', component: UsersComponent},
    {path: 'users/new', component: UserFormComponent},
    {path: 'user/:id', component: UserComponent},
    {path: '404', component: NotFoundComponent},
    {path: '', redirectTo: 'catalog', pathMatch:'full'},
    {path: '**', redirectTo: '404'}
];
export const ROUTING = RouterModule.forRoot(APP_ROUTES);