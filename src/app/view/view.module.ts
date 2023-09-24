import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { SharedModule } from '../components/shared/shared.module';
import { ViewComponent } from './view.component';


@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    SharedModule
  ]
})
export class ViewModule { }
