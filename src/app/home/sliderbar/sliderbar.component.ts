import { Component, OnInit } from '@angular/core';
import { SliderbarService } from '../../services/home/sliderService/sliderbar.service';
@Component({
  selector: 'app-sliderbar',
  templateUrl: './sliderbar.component.html',
  styleUrls: ['./sliderbar.component.css'],
})
export class SliderbarComponent implements OnInit {
  images: Array<string>;
  constructor(SliderbarService: SliderbarService) {
    this.images = SliderbarService.getAllImage();
  }

  ngOnInit(): void {}
}
