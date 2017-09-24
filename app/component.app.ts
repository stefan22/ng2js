//import component definition from ang lib
import { Component } from '@angular/core';

//setup for this particular component
@Component({
   //app tag
   selector: 'app',
   templateUrl: './partials/app.html' 


})

export class AppComponent {
   name: string;

   constructor() {
      this.name = "johny doe";
   }


}