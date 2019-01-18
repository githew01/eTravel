import { Component, OnInit } from "@angular/core";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { TranslateService } from "@ngx-translate/core";
import { Config } from "src/app/core/config";

@Component({
  selector: "app-top-banner",
  templateUrl: "./top-banner.component.html",
  styleUrls: ["./top-banner.component.scss"]
})
export class TopBannerComponent implements OnInit {
  faPhoneSquare = faPhoneSquare;
  translate: TranslateService;
  langs = {};

  constructor(translate: TranslateService, config: Config) {
    this.translate = translate;
    // switch the value
    this.langs[config.zh_HANT] = config.zh_HANS;
    this.langs[config.zh_HANS] = config.zh_HANT;
  }

  ngOnInit() {}

  changeLang() {
    this.translate.use(this.langs[this.translate.currentLang]);
  }
}
