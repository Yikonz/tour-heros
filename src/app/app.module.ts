import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';      // NgModel lives here
import { HttpModule } from '@angular/http';

//Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from  './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';

import { HeroService } from './hero.service'

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  // other modules whose exported classes are needed by component templates declared in this module.
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  // the view classes that belong to this module.
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  // creators of services that this module contributes to the global collection of services; they become accessible in
  // all parts of the app.
  providers: [
    HeroService
  ],
  // the main application view, called the root component, that hosts all other app views. Only the root module should
  // set this bootstrap property.
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
