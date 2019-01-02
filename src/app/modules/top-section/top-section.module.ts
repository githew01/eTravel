import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { FacebookComponent } from './facebook/facebook.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [TopBannerComponent, FacebookComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [TopBannerComponent]
})
export class TopSectionModule {}
