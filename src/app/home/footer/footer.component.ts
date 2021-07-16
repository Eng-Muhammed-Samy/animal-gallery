import { Component, OnInit } from '@angular/core';
// import { WildAnimalsService } from '../../services/home/wildAnimalService/wild-animals.service';
import { WildCard } from 'src/app/interfaces/wild-card';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  peopleInformation: any[] = [
    {
      country: 'Egypt',
      names: ['mohammed Samy', 'shimaa samy', 'hanaa samy', 'doaa samy'],
    },
    {
      country: 'turky',
      names: ['rofida mohamed', 'islam mohamed', 'mahmoud shahat'],
    },
  ];
  value: string = '';

  courses: string[] = ['HTML', 'CSS', 'JavaScript'];

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
  addItem() {
    this.courses.push(this.value);
  }
  removeItem(index: number) {
    this.courses.splice(index, 1);
  }
}
