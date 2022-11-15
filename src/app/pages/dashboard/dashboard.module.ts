import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProjectsViewComponent } from './projects/projects-view/projects-view.component';
import { UsageComponent } from './usage/usage.component';
import { ActivityComponent } from './activity/activity.component';
import { SettingsComponent } from './settings/settings.component';
import { DomainsComponent } from './domains/domains.component';



@NgModule({
  declarations: [ProjectsViewComponent, UsageComponent, ActivityComponent, SettingsComponent, DomainsComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
