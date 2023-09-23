import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderModule } from './components/loader/loader.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    AppRoutingModule,
    LoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
