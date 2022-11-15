import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeIndexComponent } from './home-index/home-index.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
    {
      path: '',
      children: [{
        path: 'home',
        component: HomeIndexComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'team',
        component: TeamComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'pricing',
        component: PricingComponent
      }]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRoutingModule { }
  