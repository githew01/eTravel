import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LeftSectionComponent } from './left-section/left-section.component';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [LeftSectionComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule,
    BrowserModule,
    FontAwesomeModule,
    OrderModule
  ],
  exports: [LeftSectionComponent]
})
export class LeftSectionModule {}
