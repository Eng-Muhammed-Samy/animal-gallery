import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliderbar',
  templateUrl: './sliderbar.component.html',
  styleUrls: ['./sliderbar.component.css'],
})
export class SliderbarComponent implements OnInit {
  images: Array<string> = [
    'https://images.pexels.com/photos/4577544/pexels-photo-4577544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/52961/antelope-nature-flowers-meadow-52961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/1642068/pexels-photo-1642068.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/4577498/pexels-photo-4577498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  ];
  constructor() {}

  ngOnInit(): void {}
}