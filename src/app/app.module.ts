import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './Netflix/header.component';
import { JokeListComponent } from './joke-list/joke-list.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    JokeListComponent,
  ],
  bootstrap: [JokeListComponent],
})
export class AppModule {}
