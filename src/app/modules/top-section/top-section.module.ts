import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { FacebookComponent } from './facebook/facebook.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TopBannerComponent, FacebookComponent],
  imports: [CommonModule, FontAwesomeModule, SharedModule],
  exports: [TopBannerComponent]
})
export class TopSectionModule {}
