import { Injectable } from '@angular/core';
import { Posster } from 'src/app/interfaces/posster';

@Injectable({
  providedIn: 'root',
})
export class homeService {
  constructor() {}
  // information of animal
  gatAllAnimalInformation() {
    return [
      {
        name: 'Lion',
        img: 'https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519_960_720.jpg',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et reprehenderit, ipsum earum mollitia dolore dolorem vero neque, provident, autem consectetur cumque voluptate pariatur sequi omnis porro iure qui harum.',
      },
      {
        name: 'Fox',
        img: 'https://cdn.pixabay.com/photo/2019/10/30/16/19/fox-4589927_960_720.jpg',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et reprehenderit, ipsum earum mollitia dolore dolorem vero neque, provident, autem consectetur cumque voluptate pariatur sequi omnis porro iure qui harum.',
      },
      {
        name: 'Tiger',
        img: 'https://cdn.pixabay.com/photo/2018/03/26/20/49/tiger-3264048_960_720.jpg',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et reprehenderit, ipsum earum mollitia dolore dolorem vero neque, provident, autem consectetur cumque voluptate pariatur sequi omnis porro iure qui harum.',
      },
      {
        name: 'Giraffe',
        img: 'https://cdn.pixabay.com/photo/2017/04/11/21/34/giraffe-2222908_960_720.jpg',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et reprehenderit, ipsum earum mollitia dolore dolorem vero neque, provident, autem consectetur cumque voluptate pariatur sequi omnis porro iure qui harum.',
      },
      {
        name: 'Elephant',
        img: 'https://cdn.pixabay.com/photo/2018/03/12/04/00/mammal-3218712_960_720.jpg',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et reprehenderit, ipsum earum mollitia dolore dolorem vero neque, provident, autem consectetur cumque voluptate pariatur sequi omnis porro iure qui harum.',
      },
      {
        name: 'Wolf',
        img: 'https://cdn.pixabay.com/photo/2017/01/19/16/15/wolf-1992716_960_720.jpg',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et reprehenderit, ipsum earum mollitia dolore dolorem vero neque, provident, autem consectetur cumque voluptate pariatur sequi omnis porro iure qui harum.',
      },
    ];
  }
  // slider images
  getAllImage() {
    return [
      'https://images.pexels.com/photos/4577544/pexels-photo-4577544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/52961/antelope-nature-flowers-meadow-52961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/1642068/pexels-photo-1642068.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/4577498/pexels-photo-4577498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    ];
  }
  // information of birds
  getAllBirdsInfo() {
    return [
      {
        name: 'Eagle',
        img: 'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et reprehenderit, ipsum earum mollitia dolore dolorem vero neque, provident, autem consectetur cumque voluptate pariatur sequi omnis porro iure qui harum.',
      },
      {
        name: 'Owl',
        img: 'https://cdn.pixabay.com/photo/2016/09/30/11/54/owl-1705112_960_720.jpg',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et reprehenderit, ipsum earum mollitia dolore dolorem vero neque, provident, autem consectetur cumque voluptate pariatur sequi omnis porro iure qui harum.',
      },
      {
        name: 'Kingfisher',
        img: 'https://cdn.pixabay.com/photo/2021/01/30/20/35/bird-5965265_960_720.jpg',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et reprehenderit, ipsum earum mollitia dolore dolorem vero neque, provident, autem consectetur cumque voluptate pariatur sequi omnis porro iure qui harum.',
      },
      {
        name: 'Hummingbird',
        img: 'https://cdn.pixabay.com/photo/2020/10/20/13/08/hummingbird-5670407_960_720.jpg',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et reprehenderit, ipsum earum mollitia dolore dolorem vero neque, provident, autem consectetur cumque voluptate pariatur sequi omnis porro iure qui harum.',
      },
      {
        name: 'Robin',
        img: 'https://cdn.pixabay.com/photo/2015/09/18/00/24/robin-944887_960_720.jpg',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et reprehenderit, ipsum earum mollitia dolore dolorem vero neque, provident, autem consectetur cumque voluptate pariatur sequi omnis porro iure qui harum.',
      },
      {
        name: 'Goose',
        img: 'https://cdn.pixabay.com/photo/2017/07/11/20/18/goose-2494887_960_720.jpg',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et reprehenderit, ipsum earum mollitia dolore dolorem vero neque, provident, autem consectetur cumque voluptate pariatur sequi omnis porro iure qui harum.',
      },
    ];
  }
  getPosterInfo() {
    return {
      name: 'Tiger',
      img: 'https://images03.nicepage.com/c461c07a441a5d220e8feb1a/de44a10994705aafb73ee97b/photo-1544979590-37e9b47eb705.jpg',
      backrgoundImage:
        'https://i.pinimg.com/originals/aa/37/42/aa37424d51ecdc1aa9a45a1a944c434e.jpg',
      moreInfo: ['Animal', 'dangerous', 'Predatory', 'looks like cats'],
    };
  }
}
