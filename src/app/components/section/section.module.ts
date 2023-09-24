import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { UiModalComponent } from './ui-modal/ui-modal.component';
import { WorksComponent } from './works/works.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';



@NgModule({
  declarations: [
    AboutComponent,
    BlogComponent,
    ContactComponent,
    ExperienceComponent,
    GalleryComponent,
    HomeComponent,
    PricingComponent,
    ServicesComponent,
    TestimonialsComponent,
    UiModalComponent,
    WorksComponent
  ],
  exports: [
    AboutComponent,
    BlogComponent,
    ContactComponent,
    ExperienceComponent,
    GalleryComponent,
    HomeComponent,
    PricingComponent,
    ServicesComponent,
    TestimonialsComponent,
    UiModalComponent,
    WorksComponent,
    NgbModule
  ],
  imports: [
    CommonModule,
    LightboxModule,
    // NgImageSliderModule,
    // IvyCarouselModule,
    NgbModule
  ]
})
export class SectionModule { }
