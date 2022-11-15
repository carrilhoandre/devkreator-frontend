import { NgModule } from '@angular/core';
import { HomeIndexComponent } from './home-index/home-index.component';
import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { PricingComponent } from './pricing/pricing.component';



@NgModule({
  declarations: [
    HomeIndexComponent,
    LoginComponent,
    ServicesComponent,
    TeamComponent,
    PricingComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
