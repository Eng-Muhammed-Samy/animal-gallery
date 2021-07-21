import { Component, Input, OnInit } from '@angular/core';
import { Posster } from 'src/app/interfaces/posster';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css'],
})
export class PosterComponent implements OnInit {
  @Input('element') poster: Posster = {
    name: '',
    img: '',
    backrgoundImage: '',
    moreInfo: [],
  };
  constructor() {}

  ngOnInit(): void {}
}
