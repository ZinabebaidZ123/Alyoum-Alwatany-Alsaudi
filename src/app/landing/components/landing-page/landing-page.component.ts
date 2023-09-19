import { Component , OnInit } from '@angular/core';
import { Title , Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  constructor(private title:Title , private meta: Meta ){}
  ngOnInit(): void {
    AOS.init();
   this.title.setTitle("الصفحة الرئيسية");
   this.meta.addTag({name : "descripion" , content : "الصفحة الرئيسية لموقع اليوم الوطني"   }) ;
   this.meta.addTag({name : "keywords" , content : " الملك عبدالعزيز ,  اليوم الوطني "   }) ;
  }
}
