import { Component, OnInit } from '@angular/core';
// import { WildAnimalsService } from '../../services/home/wildAnimalService/wild-animals.service';
import { WildCard } from 'src/app/interfaces/wild-card';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  toggle: boolean = true;
  title: string =
    'hello my name is mohammed i am an enginnering , iam 25 years old';
  myinfo: string =
    'hello my name is mohammed i am an enginnering , iam 25 years old';
  // info = {
  //   hiringDate: new Date(2021, 8, 15),
  // };

  constructor() {}

  // get format() {
  //   return this.toggle ? 'shortDate' : 'longDate';
  // }
  // changeFormate() {
  //   this.toggle = !this.toggle;
  // }
}
