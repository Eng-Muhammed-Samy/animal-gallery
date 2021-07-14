import { Component, OnInit } from '@angular/core';
import { WildBirdsService } from '../../services/home/wildBirdService/wild-birds.service';
interface bird {
  name: string;
  img: string;
  description: string;
}
@Component({
  selector: 'app-wild-birds',
  templateUrl: './wild-birds.component.html',
  styleUrls: ['./wild-birds.component.css'],
})
export class WildBirdsComponent implements OnInit {
  birds: Array<bird>;
  constructor(WildBirdsService: WildBirdsService) {
    this.birds = WildBirdsService.getAllBirdsInfo();
  }

  ngOnInit(): void {}
}
