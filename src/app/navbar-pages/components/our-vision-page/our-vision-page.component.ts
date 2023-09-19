import { Component , OnInit } from '@angular/core';
import { Title , Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-our-vision-page',
  templateUrl: './our-vision-page.component.html',
  styleUrls: ['./our-vision-page.component.css']
})
export class OurVisionPageComponent {
  constructor(private title:Title , private meta: Meta ){}
  ngOnInit(): void {
    AOS.init();
   this.title.setTitle("  رؤية 2030");
   this.meta.addTag({name : "descripion" , content : "     رؤية 2030"   }) ;
   this.meta.addTag({name : "keywords" , content : " الملك عبدالعزيز ,  اليوم الوطني "   }) ;
  }
}
