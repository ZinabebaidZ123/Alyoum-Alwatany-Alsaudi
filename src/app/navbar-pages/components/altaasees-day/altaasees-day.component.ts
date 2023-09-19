import { Component , OnInit } from '@angular/core';
import { Title , Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-altaasees-day',
  templateUrl: './altaasees-day.component.html',
  styleUrls: ['./altaasees-day.component.css']
})
export class AltaaseesDayComponent  implements OnInit{
  constructor(private title:Title , private meta: Meta ){}
  ngOnInit(): void {
    AOS.init();
   this.title.setTitle(" يوم التأسيس");
   this.meta.addTag({name : "descripion" , content : "    تأسيس المملكة"   }) ;
   this.meta.addTag({name : "keywords" , content : " الملك عبدالعزيز ,  اليوم الوطني "   }) ;
  }
}
