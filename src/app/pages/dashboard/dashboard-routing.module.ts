import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { DomainsComponent } from './domains/domains.component';
import { ProjectsViewComponent } from './projects/projects-view/projects-view.component';
import { SettingsComponent } from './settings/settings.component';
import { UsageComponent } from './usage/usage.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProjectsViewComponent
      },
      {
        path: 'projects',
        component: ProjectsViewComponent
      },
      {
        path: 'usage',
        component: UsageComponent
      },
      {
        path: 'activity',
        component: ActivityComponent
      },
      {
        path: 'domains',
        component: DomainsComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
