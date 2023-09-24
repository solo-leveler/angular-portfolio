import { Component, OnDestroy,Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Config } from "../../app.config";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit,OnDestroy {
  public isSpinnerVisible = true;

  public themeConfig: any;
  @Inject(DOCUMENT) document!: Document;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isSpinnerVisible = true;
      } else if ( event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.isSpinnerVisible = false;
      }
    }, () => {
      this.isSpinnerVisible = false;
    });

    this.themeConfig = Config.config;
  }

  ngOnDestroy(): void {
    this.isSpinnerVisible = false;
  }

  ngOnInit(): void {
  }
}
