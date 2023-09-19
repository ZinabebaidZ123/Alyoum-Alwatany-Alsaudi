import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing/components/landing-page/landing-page.component';
import { AltaaseesDayComponent } from './navbar-pages/components/altaasees-day/altaasees-day.component';
import { NationalDayPageComponent } from './navbar-pages/components/national-day-page/national-day-page.component';
import { OurVisionPageComponent } from './navbar-pages/components/our-vision-page/our-vision-page.component';
import { NoraBrotherPageComponent } from './navbar-pages/components/nora-brother-page/nora-brother-page.component';

const routes: Routes = [
  {path:'',redirectTo:"landing-page" , pathMatch:'full'},
  {path:"landing-page", component:LandingPageComponent},
  {path:"altaasees-day-page", component:AltaaseesDayComponent},
  {path:"national-day-page", component:NationalDayPageComponent},
  {path:"2030-vesion-page", component:OurVisionPageComponent},
  {path:'nora-brother-story-page' , component: NoraBrotherPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
