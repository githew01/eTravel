import { Component, OnInit } from '@angular/core';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss']
})
export class TopBannerComponent implements OnInit {
  faPhoneSquare = faPhoneSquare;

  constructor() {}

  ngOnInit() {}
}
