import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html'
})
export class DashboardLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onActivate(event:any) {
    window.scroll(0, 0);
  }

}
