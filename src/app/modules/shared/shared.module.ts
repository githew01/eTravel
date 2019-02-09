import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [CommonModule, TranslateModule, BrowserAnimationsModule],
  exports: [CommonModule, TranslateModule]
})
export class SharedModule {}
