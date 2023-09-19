import { Component  , OnInit } from '@angular/core';
import { Title , Meta } from '@angular/platform-browser';
import * as AOS from 'aos';
@Component({
  selector: 'app-about-nora-brother',
  templateUrl: './about-nora-brother.component.html',
  styleUrls: ['./about-nora-brother.component.css']
})
export class AboutNoraBrotherComponent implements OnInit {
  constructor(private title:Title , private meta: Meta ){}
  ngOnInit(): void {
    AOS.init();
   this.title.setTitle("  قصة أخو نورة" );
   this.meta.addTag({name : "descripion" , content : "  قصة أخو نورة   "   }) ;
   this.meta.addTag({name : "keywords" , content : " الملك عبدالعزيز ,  اليوم الوطني "   }) ;
  }
}
