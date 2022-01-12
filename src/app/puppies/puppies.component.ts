import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puppies',
  templateUrl: './puppies.component.html',
  styleUrls: ['./puppies.component.css'],
})
export class PuppiesComponent implements OnInit {
  puppies = [
    {
      name: 'Dino',
      age: 1,
      photo: 'http://placehold.it/120x120&text=image2',
      breed: 'Rottweiler',
    },
    {
      name: 'Max',
      age: 2,
      photo: 'http://placehold.it/120x120&text=image3',
      breed: 'Beagle',
    },
    {
      name: 'Lucy',
      age: 1,
      photo: 'http://placehold.it/120x120&text=image2',
      breed: 'Golden Retriever',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
