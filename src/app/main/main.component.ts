import { trigger, state, style, AUTO_STYLE, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Config } from '../app.config';
import { ScrollSpyService } from '../components/scroll-spy/scroll-spy.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers : [NgbDropdownConfig],
  animations: [
    trigger('collapsedCard', [
      state('collapsed, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state('expanded',
        style({
          overflow: 'hidden',
          height: AUTO_STYLE,
        })
      ),
      transition('collapsed <=> expanded', [
        animate('400ms ease-in-out')
      ])
    ])
  ]
})

export class MainComponent implements OnInit {
  public currentSection!: string;
  public themeConfig: any;
  public windowWidth: number;

  public openClass: string = '';
  public contentClass: string = 'content';

  public mobileHeaderClass: string = 'mobile-header-1';
  public desktopHeaderClass: string = 'desktop-header-1';
  public horizontalNavClass: string = 'navbar-dark';

  public desktopLogo = 'assets/images/logo.svg';

  public collapsedCard: string = 'collapsed';

  constructor(public scrollSpy: ScrollSpyService, private location: Location) {
    this.themeConfig = Config.config;
    this.windowWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.scrollSpy.count.subscribe(c => {
      this.currentSection = c;
    });
    document?.querySelector('body')?.classList.add(this.themeConfig.themeType);
    switch (this.themeConfig.theme) {
      case 'vertical':
        this.mobileHeaderClass = 'mobile-header-1';
        this.desktopHeaderClass = 'desktop-header-1';
        switch (this.themeConfig.themeType) {
          case 'light':
              this.desktopLogo = 'assets/images/logo-dark.svg';
            break;
          default:
            this.desktopLogo = 'assets/images/logo.svg';
        }
        break;
      case 'collapsed':
        this.mobileHeaderClass = 'mobile-header-2';
        this.desktopHeaderClass = 'desktop-header-2';
        this.contentClass = 'content-2';
        switch (this.themeConfig.themeType) {
          case 'light':
            this.desktopLogo = 'assets/images/logo-b-dark.svg';
            break;
          default:
            this.desktopLogo = 'assets/images/logo-b-light.svg';
        }
        break;
      case 'horizontal':
        this.desktopHeaderClass = 'desktop-header-3 fixed-top';
        this.contentClass = 'content-3';
        switch (this.themeConfig.themeType) {
          case 'light':
            this.horizontalNavClass = 'navbar-light';
            this.desktopLogo = 'assets/images/logo-dark.svg';
            break;
          default:
            this.desktopLogo = 'assets/images/logo.svg';
        }
        break;
    }
    this.mobileHeaderClass = this.mobileHeaderClass + ' ' + this.themeConfig.themeType;
    this.desktopHeaderClass = this.desktopHeaderClass + ' ' + this.themeConfig.themeType;

    if (this.windowWidth > 991) {
      this.collapsedCard = 'false';
    }
  }

  onResize() {
    if (this.windowWidth > 991) {
      this.collapsedCard = 'false';
    } else {
      this.collapsedCard = 'collapsed';
    }
  }

  scrollTo(section: string) {
    this.currentSection = section;
    const sectionHtml = document.querySelector('#' + section);
    if (sectionHtml !== null) {
      sectionHtml.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

  collapsedCardToggle() {
    this.collapsedCard = this.collapsedCard === 'collapsed' ? 'expanded' : 'collapsed';
  }
}