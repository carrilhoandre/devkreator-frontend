import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeIndexComponent } from './home-index/home-index.component';
import { LoginComponent } from './login/login.component';

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
      }]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRoutingModule { }
  