import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ProfileComponent} from './profile/profile.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule ],
  declarations: [ AppComponent, HelloComponent, ProfileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
