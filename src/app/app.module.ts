import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatIconButton } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomePageComponent } from './components/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





import { RouterModule } from '@angular/router';


import { JobApplicationListComponent } from './components/job-application-list/job-application-list.component';
import { NewApplicationComponent } from './components/new-application/new-application.component';
import { LogInComponent } from './components/log-in/log-in.component';



@NgModule({
  declarations: [
    AppComponent,
    
    HomePageComponent,
    NavBarComponent,
    PageNotFoundComponent,
   
    
    JobApplicationListComponent,
    NewApplicationComponent,
    LogInComponent,
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
