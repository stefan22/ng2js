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
   import: [
      BrowserModule
   ],
   
   declarations: [   //declarations are the view classes belonging to this module
      AppComponent
   ],

   bootstrap: [      //main container for entire app
      AppComponent
   ]

})      //supposedly no semi-colon here

//export as a class Module
export class AppModule {}