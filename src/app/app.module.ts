import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ApplynowComponent } from './applynow/applynow.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AboutComponent,
    HomeComponent,
    ApplynowComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
