import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollSpyDirective } from '../scroll-spy/scroll-spy.directive';
import { SectionModule } from '../section/section.module';



@NgModule({
  declarations: [
    ScrollSpyDirective,
  ],
  imports: [
    CommonModule,
    SectionModule
  ],
  exports: [
    ScrollSpyDirective,
    SectionModule
  ],
  providers: [ScrollSpyDirective],
})
export class SharedModule { }
