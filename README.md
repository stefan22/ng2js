# ng2js . &nbsp; :rocket:
> lots of changes
> no more ng-directive, instead 'invent your own tags and write a function for it'


<hr>
>  <kbd>initialApp</kbd> branch:
> saved as ref starting point
<hr>


- more focus on components
- no more controllers
- no more scope
- code with javascript or typescript

> typescript allow you to work with classes and ES6, templates,types, annotations(to add metadata)

## need  &nbsp; :coffee:
- convert typescript to javascript
- manage modules (systemjs - library to process modules)
- nodejs tooling (NPM scripts)
- local server & reload

### typical application  &nbsp; :corn:
Needs 3 different files:
   + a file to bootstrap application
   + a file to describe all the modules
   + a module file to start up


## commands &nbsp; :melon:
npm start - to run server


<kbd> notes :book:</kbd>
- concurrently - runs both - processes typescript and runs lite-server with npm script
- difference btw the import command and the declarations is that the import imports modules
  that we're going to need, while declarations are going to allow us to import all of the
  modules that we have within our application

### tsconfing.json . &nbsp; :link:
- determines how typescript is going to be converted into regular javascript
- targeting es5 (what most browsers support) . **note** es5 was causing the problem -es6 now.
- systemjs as module handler


### es6 i like  &nbsp; :fire: :punch:

 - backticks   

```
   ///lets u put things in multiple lines
               `
                  <p>i dont care about
                  leaving blank space
                  no more
                  </p>

               `
```

### exclude patterns - sublime &nbsp; :book:

```
      "file_exclude_patterns":
	[
		"*.js",
		"*.js.map",
		"*.DS_Store"
	],

	"folder_exclude_patterns":
	[
		"app/**/*.js",
		".git",
		"app/**/*.js.map",
		".js"
	],
	
	"ignored_packages":
	[
		"Vintage"
	]

```

:100:

