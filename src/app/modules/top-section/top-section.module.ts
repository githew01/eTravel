import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBannerComponent } from './top-banner/top-banner.component';

@NgModule({
  declarations: [TopBannerComponent],
  imports: [CommonModule],
  exports: [TopBannerComponent]
})
export class TopSectionModule {}
