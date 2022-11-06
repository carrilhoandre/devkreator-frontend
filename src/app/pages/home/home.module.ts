import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeIndexComponent } from './home-index/home-index.component';
import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    HomeIndexComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
