import { Component, OnInit } from '@angular/core';

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
  cards: Array<animal> = [
    {
      name: 'Lion',
      img: 'https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519_960_720.jpg',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, modidistinctio',
    },
    {
      name: 'Fox',
      img: 'https://cdn.pixabay.com/photo/2019/10/30/16/19/fox-4589927_960_720.jpg',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, modidistinctio',
    },
    {
      name: 'Tiger',
      img: 'https://cdn.pixabay.com/photo/2018/03/26/20/49/tiger-3264048_960_720.jpg',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, modidistinctio',
    },
    {
      name: 'Giraffe',
      img: 'https://cdn.pixabay.com/photo/2017/04/11/21/34/giraffe-2222908_960_720.jpg',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, modidistinctio',
    },
    {
      name: 'Elephant',
      img: 'https://cdn.pixabay.com/photo/2018/03/12/04/00/mammal-3218712_960_720.jpg',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, modidistinctio',
    },
    {
      name: 'Wolf',
      img: 'https://cdn.pixabay.com/photo/2017/01/19/16/15/wolf-1992716_960_720.jpg',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, modidistinctio',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
