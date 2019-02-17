import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Config } from './core/config';
import { Title } from '@angular/platform-browser';
import { ResponsiveService } from './services/responsive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    config: Config,
    private titleService: Title,
    private responsiveService: ResponsiveService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(config.zh_HANS);
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(config.zh_HANS);

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setTitile();
    });
  }

  setTitile() {
    this.translate.get('HOME_TITLE').subscribe((title: string) => {
      console.log('AppComponent title is: ', title);
      this.titleService.setTitle(title);
    });
  }

  ngOnInit() {
    this.onResize();
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      if (isMobile) {
        console.log('Mobile device detected');
      } else {
        console.log('Desktop detected');
      }
    });
  }

  onResize() {
    this.responsiveService.checkWidth();
  }
}
