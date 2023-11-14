import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCoffeeComponent } from './components/new-coffee/new-coffee.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RandomCoffeeComponent } from './components/random-coffee/random-coffee.component';

const routes: Routes = [
  { 
    path: '',
    component: HomePageComponent
  },
  { 
    path: 'new-coffee',
    component: NewCoffeeComponent
  },
  {
    path: 'random-coffee',
    component: RandomCoffeeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
