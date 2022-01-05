import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css'],
})
export class JokeListComponent implements OnInit {
  jokes: any[] = [
    {
      setup: 'What did the cheese say when it looked in the mirror?',
      punchLine: 'Hello-Me (Halloumi)',
    },
    {
      setup: 'Hey are ok',
      punchLine: 'yes',
    },
    {
      setup: 'are you there ',
      punchLine: ' Hey are you there',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
