import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  // Directive,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Directive } from '@angular/core';
import { LoggerService } from './logger.service';

let nextId = 1;
@Directive({
  selector: '[appPeekABoo]',
})
export class PeekABooDirective
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor(private logger: LoggerService) {
    this.logIt(`constructorOfDirective`);
  }
  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }
  // custom added for check overwrite on Component
  ngOnChanges(changes: SimpleChanges) {
    this.logIt(`OnChangesOnDirective`);
  }

  // implement OnInit's `ngOnInit` method
  ngOnInit() {
    this.logIt(`OnInitOnDirective`);
  }

  // custom added for check overwrite on Component
  ngDoCheck() {
    this.logIt(`DoCheckOnDirective`);
  }

  // custom added for check overwrite on Component
  ngAfterContentInit() {
    this.logIt(`AfterContentInitOnDirective`);
  }

  // custom added for check overwrite on Component
  ngAfterContentChecked() {
    this.logIt(`AfterContentCheckedOnDirective`);
  }

  // custom added for check overwrite on Component
  ngAfterViewInit() {
    this.logIt(`AfterViewInitOnDirective`);
  }

  // custom added for check overwrite on Component
  ngAfterViewChecked() {
    this.logIt(`AfterViewCheckedOnDirective`);
  }

  // custom added for check overwrite on Component
  ngOnDestroy() {
    this.logIt(`OnDestroyOnDirective`);
  }
}
