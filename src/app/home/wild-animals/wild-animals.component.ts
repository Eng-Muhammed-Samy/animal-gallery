import { Component, OnInit } from '@angular/core';
import { homeService } from '../../services/home/home.service';
interface animals {
  name: string;
  img: string;
  description: string;
}

@Component({
  selector: 'app-wild-animals',
  templateUrl: './wild-animals.component.html',
  styleUrls: ['./wild-animals.component.css'],
})
export class WildAnimalsComponent implements OnInit {
  cards: Array<animals>;
  constructor(WildAnimalsService: homeService) {
    this.cards = WildAnimalsService.gatAllAnimalInformation();
  }

  ngOnInit(): void {}
}
