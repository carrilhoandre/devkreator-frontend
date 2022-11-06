import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormatCurrencyPipe } from '../core/pipes/format-currency.pipe';
import { FooterSiteComponent } from './footer-site/footer-site.component';
import { HeaderSiteComponent } from './header-site/header-site.component';

@NgModule({
  declarations: [FormatCurrencyPipe, FooterSiteComponent, HeaderSiteComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[CommonModule,FormatCurrencyPipe]
})
export class SharedModule { }
