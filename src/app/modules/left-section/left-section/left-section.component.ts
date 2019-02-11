import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/services/responsive.service';
import from_to from 'src/app/data/from-to.json';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.scss']
})
export class LeftSectionComponent implements OnInit {
  public isMobile: Boolean;
  screenWidth: string;
  faBars = faBars;
  fromTo = from_to;

  constructor(private responsiveService: ResponsiveService) {}

  ngOnInit() {
    this.onResize();
    this.responsiveService.checkWidth();
    console.log(this.fromTo);
  }

  onResize() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobile = isMobile;
      this.screenWidth = this.responsiveService.screenWidth;
    });
  }
}
