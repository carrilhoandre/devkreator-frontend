import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProjectsEditComponent } from './projects/projects-edit/projects-edit.component';
import { ProjectsViewComponent } from './projects/projects-view/projects-view.component';
import { UsageComponent } from './usage/usage.component';



@NgModule({
  declarations: [ProjectsViewComponent,ProjectsEditComponent, UsageComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
