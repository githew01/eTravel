import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TopSectionModule } from './modules/top-section/top-section.module';
import { LeftSectionModule } from './modules/left-section/left-section.module';
import { SearchFormModule } from './modules/search-form/search-form.module';
import { CalendarsModule } from './modules/calendars/calendars.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Config } from './core/config';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    TopSectionModule,
    LeftSectionModule,
    SearchFormModule,
    CalendarsModule
  ],
  providers: [Config],
  bootstrap: [AppComponent]
})
export class AppModule {}
