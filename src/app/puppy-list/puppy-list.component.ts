import { Component, Input, OnInit } from '@angular/core';
import { Puppy } from '../puppy';
//import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-puppy-list',
  templateUrl: './puppy-list.component.html',
  styleUrls: ['./puppy-list.component.css'],
})
export class PuppyListComponent implements OnInit {
  @Input() puppies: Puppy[] = [];

  constructor() {}

  ngOnInit() {}
}
