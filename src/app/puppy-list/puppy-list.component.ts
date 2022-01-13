import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Puppy } from '../puppy';
//import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-puppy-list',
  templateUrl: './puppy-list.component.html',
  styleUrls: ['./puppy-list.component.css'],
})
export class PuppyListComponent implements OnInit, OnChanges {
  @Input() puppies: Puppy[] = [];
  changeLog: any = [];
  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    for (const prop in changes) {
      const chng = changes[prop];
      const currentValue = JSON.stringify(chng.currentValue);
      const previousValue = JSON.stringify(chng.previousValue);
      this.changeLog.push(
        `${prop}: currentValue = ${currentValue}, previousValue = ${previousValue}`
      );
    }
  }
}
