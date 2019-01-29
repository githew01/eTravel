import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LeftSectionComponent } from './left-section/left-section.component';

@NgModule({
  declarations: [LeftSectionComponent],
  imports: [CommonModule, SharedModule],
  exports: [LeftSectionComponent]
})
export class LeftSectionModule {}
