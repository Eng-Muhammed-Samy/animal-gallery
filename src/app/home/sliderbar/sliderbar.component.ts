import { Component, OnInit } from '@angular/core';
import { homeService } from 'src/app/services/home/home.service';
@Component({
  selector: 'app-sliderbar',
  templateUrl: './sliderbar.component.html',
  styleUrls: ['./sliderbar.component.css'],
})
export class SliderbarComponent implements OnInit {
  images: Array<string>;
  constructor(SliderbarService: homeService) {
    this.images = SliderbarService.getAllImage();
  }

  ngOnInit(): void {}
}
