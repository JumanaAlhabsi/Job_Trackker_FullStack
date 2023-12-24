import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { NewApplicationComponent } from './components/new-application/new-application.component';
import { JobApplicationListComponent } from './components/job-application-list/job-application-list.component';
import { LogInComponent } from './components/log-in/log-in.component';
const routes: Routes = [
  { 
    path: '',
    component: HomePageComponent
  },
  {
    path : 'new-Application',
    component: NewApplicationComponent
  },
  
  {
    path: 'job-Application-list',
    component: JobApplicationListComponent
  },
  {
    path: 'log-in',
    component: LogInComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
