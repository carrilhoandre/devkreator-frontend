import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { HeaderSiteComponent } from './shared/header-site/header-site.component';
import { FooterSiteComponent } from './shared/footer-site/footer-site.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    DashboardLayoutComponent,
    HeaderSiteComponent,
    FooterSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
