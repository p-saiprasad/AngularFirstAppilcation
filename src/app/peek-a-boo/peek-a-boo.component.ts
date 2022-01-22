import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Directive,
  DoCheck,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { LoggerService } from '../logger.service';
import { PeekABooDirective } from '../peek-aboo.directive';

@Component({
  selector: 'app-peek-a-boo',
  templateUrl: './peek-a-boo.component.html',
  styleUrls: ['./peek-a-boo.component.css'],
})
export class PeekABooComponent
  extends PeekABooDirective
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() name: string;
  private verb = 'initialized';
  ngOnInit() {}
  constructor(logger: LoggerService) {
    super(logger);
    this.logIt(`constructorOfComponent`);
    let is = this.name ? 'is' : 'is not';
    this.logIt(`name ${is} known at construction`);}
    // only called for/if there is an @input variable set by parent.
  ngOnChanges(changes: SimpleChanges) {
    let changesMsgs: string[] = [];
    for (let propName in changes) {
      if (propName === 'name') {
        let name = changes['name'].currentValue;
        changesMsgs.push(`name ${this.verb} to "${name}"`);
      } else {
        changesMsgs.push(propName + ' ' + this.verb);
      }
    }
    this.logIt(`OnChanges: ${changesMsgs.join('; ')}`);
    this.verb = 'changed'; // next time it will be a change
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngDoCheck() { this.logIt(`DoCheck`); }

  ngAfterContentInit() { this.logIt(`AfterContentInit`);  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() { this.logIt(`AfterContentChecked`); }

  ngAfterViewInit() { this.logIt(`AfterViewInit`); }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() { this.logIt(`AfterViewChecked`); }

  ngOnDestroy() { this.logIt(`OnDestroy`); }
  }


function changes(changes: any,SimpleChanges: any) {
throw new Error('Function not implemented.');
}
