import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollSpyDirective } from '../scroll-spy/scroll-spy.directive';



@NgModule({
  declarations: [
    ScrollSpyDirective,
  ],
  imports: [
    CommonModule,
    // SectionsModule
  ],
  exports: [
    ScrollSpyDirective,
    //SectionsModule
  ],
  providers: [ScrollSpyDirective],
})
export class SharedModule { }
