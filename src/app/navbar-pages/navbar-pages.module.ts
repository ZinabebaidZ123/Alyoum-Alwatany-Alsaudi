import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaaseesDayComponent } from './components/altaasees-day/altaasees-day.component';
import { BannerSectionComponent } from './components/banner-section/banner-section.component';
import { AboutTaaseesDayComponent } from './components/about-taasees-day/about-taasees-day.component';
import { SharedModule } from '../shared/shared.module';
import { AlsaudiaEstablishmentComponent } from './components/alsaudia-establishment/alsaudia-establishment.component';
import { SliderComponent } from './components/slider/slider.component';
import { NationalDayPageComponent } from './components/national-day-page/national-day-page.component';
import { NationalDayBannerSectionComponent } from './components/national-day-banner-section/national-day-banner-section.component';
import { NationalDaySliderComponent } from './components/national-day-slider/national-day-slider.component';
import { AboutNationalDayComponent } from './components/about-national-day/about-national-day.component';
import { OurVisionPageComponent } from './components/our-vision-page/our-vision-page.component';
import { VisionBannerComponent } from './components/vision-banner/vision-banner.component';
import { VisionSliderComponent } from './components/vision-slider/vision-slider.component';
import { AboutVisionComponent } from './components/about-vision/about-vision.component';
import { VisionProjectsComponent } from './components/vision-projects/vision-projects.component';
import { GmalDiscoveryComponent } from './components/gmal-discovery/gmal-discovery.component';
import { VisionRoshenSectionComponent } from './components/vision-roshen-section/vision-roshen-section.component';
import { NoraBrotherPageComponent } from './components/nora-brother-page/nora-brother-page.component';
import { NoraStoryBannerComponent } from './components/nora-story-banner/nora-story-banner.component';
import { AboutNoraBrotherComponent } from './components/about-nora-brother/about-nora-brother.component';


@NgModule({
  declarations: [
    AltaaseesDayComponent,
    BannerSectionComponent,
    AboutTaaseesDayComponent,
    AlsaudiaEstablishmentComponent,
    SliderComponent,
    NationalDayPageComponent,
    NationalDayBannerSectionComponent,
    NationalDaySliderComponent,
    AboutNationalDayComponent,
    OurVisionPageComponent,
    VisionBannerComponent,
    VisionSliderComponent,
    AboutVisionComponent,
    VisionProjectsComponent,
    GmalDiscoveryComponent,
    VisionRoshenSectionComponent,
    NoraBrotherPageComponent,
    NoraStoryBannerComponent,
    AboutNoraBrotherComponent
  ],
  imports: [
    CommonModule , 
    SharedModule
  ] ,
  exports: [
    CommonModule ,
    AltaaseesDayComponent ,
    BannerSectionComponent ,
    AlsaudiaEstablishmentComponent ,
    NationalDayPageComponent ,
    OurVisionPageComponent ,
    NoraBrotherPageComponent
  ]
})
export class NavbarPagesModule { }
