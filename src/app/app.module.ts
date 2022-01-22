import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './Netflix/header.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { PuppyListComponent } from './puppy-list/puppy-list.component';
import { PuppiesComponent } from './puppies/puppies.component';
import { PeekABooParentComponent } from './peek-aboo-parent/peek-aboo-parent.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    JokeListComponent,
    TemplateRefComponent,
    PuppyListComponent,
    PuppiesComponent,
    PeekABooParentComponent,
  ],
  bootstrap: [PeekABooParentComponent],
})
export class AppModule {}
