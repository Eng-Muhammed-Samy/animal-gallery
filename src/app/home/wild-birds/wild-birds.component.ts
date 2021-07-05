import { Component, OnInit } from '@angular/core';
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
  birds: Array<bird> = [
    {
      name: 'Eagle',
      img: 'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, modidistinctio',
    },
    {
      name: 'Owl',
      img: 'https://cdn.pixabay.com/photo/2016/09/30/11/54/owl-1705112_960_720.jpg',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, modidistinctio',
    },
    {
      name: 'Kingfisher',
      img: 'https://cdn.pixabay.com/photo/2021/01/30/20/35/bird-5965265_960_720.jpg',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, modidistinctio',
    },
    {
      name: 'Hummingbird',
      img: 'https://cdn.pixabay.com/photo/2020/10/20/13/08/hummingbird-5670407_960_720.jpg',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, modidistinctio',
    },
    {
      name: 'Robin',
      img: 'https://cdn.pixabay.com/photo/2015/09/18/00/24/robin-944887_960_720.jpg',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, modidistinctio',
    },
    {
      name: 'Goose',
      img: 'https://cdn.pixabay.com/photo/2017/07/11/20/18/goose-2494887_960_720.jpg',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, modidistinctio',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
