import { Component , OnInit  } from '@angular/core';
import { Title , Meta } from '@angular/platform-browser';
import * as AOS from 'aos';
@Component({
  selector: 'app-banner-section',
  templateUrl: './banner-section.component.html',
  styleUrls: ['./banner-section.component.css']
})
export class BannerSectionComponent implements OnInit {
 
  ngOnInit(): void {
    AOS.init();

  }
  toggleAudio(audio: HTMLAudioElement) {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  isPlaying(audio: HTMLAudioElement) {
    return !audio.paused;
  }
}
