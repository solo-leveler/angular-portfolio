import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Config } from '../app.config';
import { ScrollSpyService } from '../components/scroll-spy/scroll-spy.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  public currentSection !: string;
  public themeConfig: any;

  constructor(public scrollSpy: ScrollSpyService, private activatedRoute: ActivatedRoute ) {
    this.themeConfig = Config.config;

    console.log(this.themeConfig);

  }

  ngOnInit(): void {}

  onSectionChange(sectionId: any) {
    this.currentSection = sectionId;
    this.scrollSpy.nextCount(sectionId);
  }
}
