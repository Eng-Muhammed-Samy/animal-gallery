import { Component, OnInit } from '@angular/core';
import { homeService } from 'src/app/services/home/home.service';
import { WildCard } from 'src/app/interfaces/wild-card';
@Component({
  selector: 'app-wild-birds',
  templateUrl: './wild-birds.component.html',
  styleUrls: ['./wild-birds.component.css'],
})
export class WildBirdsComponent implements OnInit {
  name: string = '';
  image: string = '';
  description: string = '';

  birds: Array<WildCard>;
  constructor(WildBirdsService: homeService) {
    this.birds = WildBirdsService.getAllBirdsInfo();
  }
  deleteBird(index: number) {
    this.birds.splice(index, 1);
  }

  addNewBird() {
    this.birds.push({
      name: this.name,
      img: this.image,
      description: this.description,
    });
  }
  ngOnInit(): void {}
}
