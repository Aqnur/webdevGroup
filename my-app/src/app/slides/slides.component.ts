import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../shared/services/provider.service';


@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {

  constructor(private provider: ProviderService) { }
  public slideIndex = 0;
  ngOnInit(): void {
    this.showSlides();

  }

  showSlides() {
    const slides = document.getElementsByClassName('mySlides') ;
    for (let i = 0; i < slides.length; i++) {
      slides[i].setAttribute('style', 'display : none');
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length) { this.slideIndex = 1; }
    slides[this.slideIndex - 1].setAttribute('style', 'display : block');
    setTimeout(() => this.showSlides(), 4000);
  }

  currentSlide(n: number) {
    this.slideIndex = n;
  }
}


