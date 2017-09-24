//import component definition from ang lib
import { Component } from '@angular/core';

//setup for this particular component
@Component({
   //app tag
   selector: 'app',
   template: `
              <div class="card search"> 
              <h1 class="search-headline">Artist Directory</h1>
              <label class="search-label">search</label>
              </div><!-- card search -->
             `  


})

export class AppComponent {}