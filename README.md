# ng2js
> lots of changes
> no more ng-directive, instead 'invent your own tags and write a function for it'

- more focus on components
- no more controllers
- no more scope
- code with javascript or typescript

> typescript allow you to work with classes and ES6, templates,types, annotations(to add metadata)

## need
- convert typescript to javascript
- manage modules (systemjs - library to process modules)
- nodejs tooling (NPM scripts)
- local server & reload


## commands
npm start - to run server


### notes
- concurrently - runs both - processes typescript and runs lite-server with npm script
- difference btw the import command and the declarations is that the import imports modules
  that we're going to need, while declarations are going to allow us to import all of the
  modules that we have within our application

### tsconfing.json
- determines how typescript is going to be converted into regular javascript
- targeting es5 (what most browsers support)
- systemjs as module handler

