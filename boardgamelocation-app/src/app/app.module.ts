import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './gameCatalog/game-list/game-list.component';
import { GameDetailComponent } from './gameCatalog/game-detail/game-detail.component';
import { GameCatalogComponent } from './gameCatalog/game-catalog/game-catalog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './userManager/user/user.component';
import { UsersComponent } from './userManager/users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { UserFormComponent } from './userManager/user-form/user-form.component';
import { GameFormComponent } from './gameCatalog/game-form/game-form.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { GameDetailUpdateComponent } from './gameCatalog/game-detail-update/game-detail-update.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameDetailComponent,
    GameCatalogComponent,
    UserComponent,
    UsersComponent,
    NotFoundComponent,
    HeaderComponent,
    UserFormComponent,
    GameFormComponent,
    GameDetailUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ROUTING,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
