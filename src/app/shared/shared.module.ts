import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormatCurrencyPipe } from '../core/pipes/format-currency.pipe';

@NgModule({
  declarations: [FormatCurrencyPipe],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[CommonModule,FormatCurrencyPipe]
})
export class SharedModule { }
