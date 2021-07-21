import { Component, OnInit } from '@angular/core';
import { homeService } from 'src/app/services/home/home.service';
import { Posster } from '../interfaces/posster';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posterInformation: Posster;
  constructor(homeService: homeService) {
    this.posterInformation = homeService.getPosterInfo();
  }

  ngOnInit(): void {}
  addNewBird() {}
}
