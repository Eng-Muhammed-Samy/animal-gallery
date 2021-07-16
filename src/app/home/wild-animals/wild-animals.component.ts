import { Component, OnInit } from '@angular/core';
import { homeService } from '../../services/home/home.service';
import { WildCard } from 'src/app/interfaces/wild-card';

@Component({
  selector: 'app-wild-animals',
  templateUrl: './wild-animals.component.html',
  styleUrls: ['./wild-animals.component.css'],
})
export class WildAnimalsComponent implements OnInit {
  name: string = '';
  image: string = '';
  description: string = '';

  cards: Array<WildCard>;
  constructor(WildAnimalsService: homeService) {
    this.cards = WildAnimalsService.gatAllAnimalInformation();
  }
  addNewAnimal() {
    this.cards.push({
      name: this.name,
      img: this.image,
      description: this.description,
    });
  }

  removeAnimal(index: number) {
    this.cards.splice(index, 1);
  }
  ngOnInit(): void {}
}
