# CastleCSS Tabs
![CastleCSS logo @CastleCss.com](https://www.doordarius.nl/castlecss-logo-250.png)

## CastleCSS Framework
The tab files are part of the [CastleCSS Package](https://github.com/CastleCSS/castlecss)

## How to install
- Install via [npm](https://www.npmjs.com/): ```npm install castlecss-tabs -S```
- Require it in your own npm package
- Download or clone the package

## Updating files
CastleCSS is built so it's easy to update, you can just download make it your own as long as you don't ovewrite the core files. 

```npm update castlecss-tabs```

## Documentation and examples
You can find the documentation and examples at http://www.castlecss.com/tabs.html and [castlecss-docs](https://github.com/CastleCSS/castlecss-docs)


## Adjusting the variables
Because of the unique update-able setup of CastleCSS you need a seperate variable file to overwrite the default CastleCSS variables. There are a few ways to do this: 

- Use the [boilerplate](https://github.com/CastleCSS/castlecss-boilerplate/) which provides the complete distribution of CastleCSS Tabs
- Copy variables.scss from /node_modules/castlecss-core/sass/variables.scss into your own scss folder and include it into your main.scss
- Copy the example from the [documentation](http://castlecss.com/tabs.html) into your own variables.scss and include it into your main.scss

## Dependencies
Because CastleCSS Tabs uses jQuery as dependency, the distributions contain jQuery. There is however a possibility to make use of the jQuery version of your choice, by making use of the no.vendors distributions.
The no.vendor distributions work, as long as the jQuery variable is defined in the global scope.

## Basic structure
The basis structure for your website should look similar like this:

```
| Project directory/
|
|-- node_modules/
| | -- castlecss-core/
| | -- castlecss-tabs/
| | 
|-- scss/
| |-- main.scss
| |-- variables.scss
| |
|-- js/
| | -- scripts.js
| |
|-- img/
|-- dist/
| |-- styles.min.css
| |-- styles.min.map
| |-- scripts.min.js
| |
|-- index.html
|-- Gruntfile.js
|-- package.json
```

## Usage

### Including CastleCSS Tabs into your stylesheet
Your main.scss should have a setup similair to this (included in the CastleCSS Boilerplate):
```
/*  core variable files */
@import "path/to/castlecss-core/sass/variables";

/*  Your own variables so they overwrite the core */
@import "variables";

/*  rest of core files */
@import "node_modules/castlecss-core/sass/main";
@import "node_modules/castlecss-tabs/sass/main";

 
/*  Include your own files below this line
    --------------------------------------
*/
```

### Including CastleCSS Tabs into your javascript
To make use of CastleCSS Tabs, simply include the code below to scripts.js

```
var Tabs = require('castlecss-tabs').Tabs;
$(function()
{
	Tabs();
});
```

