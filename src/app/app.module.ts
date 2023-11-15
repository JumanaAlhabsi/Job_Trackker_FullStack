import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatIconButton } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCoffeeComponent } from './components/new-coffee/new-coffee.component';

import { HomePageComponent } from './components/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RandomCoffeeComponent } from './components/random-coffee/random-coffee.component';

import { CoffeeListComponent} from './components/coffee-list/coffee-list.component';

import { SingleCoffeeComponent } from './components/single-coffee/single-coffee.component';
import { RouterModule } from '@angular/router';
import { CoffeeService } from './services/coffee.service';



@NgModule({
  declarations: [
    AppComponent,
    NewCoffeeComponent,
    HomePageComponent,
    NavBarComponent,
    PageNotFoundComponent,
    CoffeeListComponent,
    SingleCoffeeComponent,
    RandomCoffeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    RouterModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
