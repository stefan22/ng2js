/* ‹‹‹·https://angular.io/docs/ts/latest/api·›››
__________________________________________________∫*/  

//import library patformBrowserDynamic from angular,then plat-bro-dyn from node_modules
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//AppModule class going to hold all modules - and create here
import { AppModule } from './app.modules';

//bootstrap application with platformBrowserDynamic method
platformBrowserDynamic().bootstrapModule(AppModule);
