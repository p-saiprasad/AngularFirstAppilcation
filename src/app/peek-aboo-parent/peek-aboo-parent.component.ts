import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-peek-aboo-parent',
  templateUrl: './peek-aboo-parent.component.html',
  styleUrls: ['./peek-aboo-parent.component.css'],
  providers: [LoggerService],
})
export class PeekABooParentComponent implements OnInit {
  hasChild = false;
  hookLog: string[];

  heroName = 'Windstorm';
  private logger: LoggerService;
  constructor(logger: LoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }
  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = 'Windstorm';
      this.logger.clear(); // clear log on create
    }
    this.hookLog = this.logger.logs;
    this.logger.tick();
  }

  updateHero() {
    this.heroName += '!';
    this.logger.tick();
  }

  ngOnInit() {}
}
