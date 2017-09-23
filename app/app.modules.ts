/*
‹‹‹ all modules go here ››› incl dependencies
*/

//ngModule from ang core lib
import { NgModule } from '@angular/core';
//BrowModule from ang platbrowser
import { BrowserModule } from '@angular/platform-browser';


//starting module created
import { AppComponent } from './component.app';

//creating ngModuleDecorator - functions the modify js classes
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

//export as a class Module
export class AppModule {}