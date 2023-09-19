import { Component , OnInit } from '@angular/core';
import { Title , Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-national-day-page',
  templateUrl: './national-day-page.component.html',
  styleUrls: ['./national-day-page.component.css']
})
export class NationalDayPageComponent implements OnInit {
  constructor(private title:Title , private meta: Meta ){}
  ngOnInit(): void {
    AOS.init();
   this.title.setTitle("   اليوم الوطني");
   this.meta.addTag({name : "descripion" , content : "    اليوم الوطني"   }) ;
   this.meta.addTag({name : "keywords" , content : " الملك عبدالعزيز ,  اليوم الوطني "   }) ;
  }
}
