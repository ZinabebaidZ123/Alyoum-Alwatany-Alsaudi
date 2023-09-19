import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FirstSaudiaStateSectionComponent } from './components/first-saudia-state-section/first-saudia-state-section.component';
import { SecSaudiaStateSectionComponent } from './components/sec-saudia-state-section/sec-saudia-state-section.component';
import { ThirdSaudiaStateSectionComponent } from './components/third-saudia-state-section/third-saudia-state-section.component';
import { NationalDaySectionComponent } from './components/national-day-section/national-day-section.component';
import { BannerSectionComponent } from './components/banner-section/banner-section.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    FirstSaudiaStateSectionComponent,
    SecSaudiaStateSectionComponent,
    ThirdSaudiaStateSectionComponent,
    NationalDaySectionComponent,
    BannerSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ] ,
  exports:[
    FirstSaudiaStateSectionComponent ,
    SecSaudiaStateSectionComponent ,
    ThirdSaudiaStateSectionComponent , 
    BannerSectionComponent ,
    LandingPageComponent
  ]
})
export class LandingModule { }
