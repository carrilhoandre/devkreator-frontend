import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsViewComponent } from './projects/projects-view/projects-view.component';
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
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
