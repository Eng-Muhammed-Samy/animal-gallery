import { Component, OnInit } from '@angular/core';
import { WildAnimalsService } from '../../services/home/wildAnimalService/wild-animals.service';
interface animal {
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
  cards: Array<animal>;
  constructor(WildAnimalsService: WildAnimalsService) {
    this.cards = WildAnimalsService.gatAllAnimalInformation();
  }

  ngOnInit(): void {}
}
