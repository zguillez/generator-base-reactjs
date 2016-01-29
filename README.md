# generator-base-reactjs

[![Join the chat at https://gitter.im/zguillez/generator-base-reactjs](https://badges.gitter.im/zguillez/generator-base-reactjs.svg)](https://gitter.im/zguillez/generator-base-reactjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![npm version](https://badge.fury.io/js/generator-base-reactjs.svg)](https://badge.fury.io/js/generator-base-reactjs)
[![Build Status](http://img.shields.io/travis/zguillez/generator-base-reactjs.svg)](https://travis-ci.org/zguillez/generator-base-reactjs)
[![Code Climate](http://img.shields.io/codeclimate/github/zguillez/generator-base-reactjs.svg)](https://codeclimate.com/github/zguillez/generator-base-reactjs)
[![Dependency Status](https://gemnasium.com/zguillez/generator-base-reactjs.svg)](https://gemnasium.com/zguillez/generator-base-reactjs)
[![Installs](https://img.shields.io/npm/dt/generator-base-reactjs.svg)](https://coveralls.io/r/zguillez/generator-base-reactjs)
![](https://reposs.herokuapp.com/?path=zguillez/generator-base-reactjs)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)
[![Analytics](https://ga-beacon.appspot.com/UA-1125217-30/zguillez/generator-base-reactjs?pixel)](https://github.com/igrigorik/ga-beacon)

> [Zguillez](https://zguillez.io) | Guillermo de la Iglesia

### Yeoman generator for ReactJS webapp development. With RequireJS, Bootstrap, Sass and templating with Jade. JSX compiled with Babel

![](http://zguillez.github.io/img/reactjs.png)

# Getting Started

### Install Yeoman

	npm install -g yo

### Yeoman Generators

To install generator-base-backbone from npm, run:

	npm install -g generator-base-reactjs
	
	//or:
	sudo npm install -g generator-base-reactjs

Finally, initiate the generator:

	yo base-reactjs

If you have error on install try to update dependences manually:

```bash
sudo npm update
```
```bash
bower update
```

## Requeriments

### [NodeJS](https://nodejs.org/)

For update npm

	sudo npm install npm -g

### [Bower](http://bower.io/)

	npm install -g bower

### [Sass](http://sass-lang.com/)

	sudo gem install sass
	
**Documentation:**

* [https://nodejs.org/](https://nodejs.org/)
* [http://bower.io/](http://bower.io/)
* [http://sass-lang.com/](http://sass-lang.com/)

# Usage

Develop code on folder **/src**

	/src
		/data
		/images
		/scripts
			/components
		/styles
		/templates
		
### Compile code

Use grunt task to compile code and deploy webapp

	grunt serve
	
THis will launch server on port 9000

	http://localhost:9000/
	
Distribute code is compileded on forder **/dist**

	/dist
		/css
		/data
		/images
		/js
		/lib
		/templates
		
## Styling

Sass files (\*.sass, \*.scss) must be located on **/src/styles** folder root.

* Grunt task **sass.js** will process the files into CSS files to folder **/src/styles/css**.
* Grunt task **copy.js** will copy all CSS files into **/src/styles/css** to folder **/dist/css** for ditribution.
* You can also create and edit CSS files in **/src/styles/css**.

## Templating with Jade and Reactjs-Template

* The NodeJS template engine JADE is implemented. Jade files (\*.jade) must be located on **/templates** folder root.

Example:

	// src/templates/footer.jade
	
	footer
		.row
			p @2015

Compiled:

	// src/templates/rt/footer.rt
	
	<footer><div class="row"><p>@2015</p></div></footer>
	
* Grunt task **reactTemplates** will process the files into templates files.

Example:

	// src/templates/rt/footer.rt.js
	
	var footerRT = function () {
		return React.createElement('footer', {}, React.createElement('div', { 'className': 'row' }, React.createElement('p', {}, '@2015')));
	};
			
* Grunt task **copy.js** will copy all CSS files into **/templates/html** to folder **/dist/templates** for ditribution.

* Grunt task **replace.js** will modify the script to implement RequireJS function.

Example:
	
	// dist/templates/footer.rt.js
	
	define(['react'], function(React) {
		return footerRT = function () {
    		return React.createElement('footer', {}, React.createElement('div', { 'className': 'row' }, React.createElement('p', {}, '@2015')));
		};
	});

* You can now insert templates into your components

Example:

	// src/scripts/components/footer.js
	
	define(['react', '../../../../templates/footer.rt'], function(React, template) {
		'use strict';
		return React.createClass({
			displayName: 'footer',
			render: template
		});
	});

* You can also create components without templates

Example:

	// src/scripts/components/footer.js
	
	define(['react'], function(React) {
		'use strict';
		return React.createClass({
			displayName: 'footer',
			render: function() {
				return (
					<footer>
						<div className="row">
							<p>@2015</p>
						</div>
					</footer>
				)
			}
		});
	});
	
**Documentation:**

* [http://jade-lang.com/](http://jade-lang.com/)
* [http://wix.github.io/react-templates/](http://wix.github.io/react-templates/)

# Routing

Routing is made with Page.js micro client-side router. Router is loaded in Main.js file:

	// src/scripts/main.js
	
	'use strict';
	require.config({
		paths: {
			text: '../lib/text',
			react: '../lib/react',
			jsx: '../lib/jsx',
			react_dom: '../lib/react-dom',
			page: '../lib/page/page',
			underscore: '../lib/lodash.min',
			jquery: '../lib/jquery.min',
			bootstrap: '../lib/bootstrap.min',
			router: './router'
		}
	});
	window.app = {};
	require(['react', 'jquery', 'underscore'], function(React, $, _) {
		require(['react_dom', , 'bootstrap'], function(ReactDOM, Bootstrap) {
			require(['router']);
		});
	});

Place routing path in file router.js

	// src/scripts/router.js
	
	define(['page', 'react', 'react_dom'], function(Page, React, ReactDOM) {
		'use strict';
		Page.base('');
		Page('/', index);
		Page();
	
		function index(ctx) {
			if (ctx.hash !== '') {
				Page(ctx.hash);
			} else {
				landing();
			}
		}
	
		function landing() {
			loadComponent('../js/components/landing');
		}
	
		function loadComponent(path) {
			require([path], function(Component) {
				ReactDOM.render(<Component/>, document.getElementById('app'));
			});
		}
	});

`Page(ctx.hash);` in index function is needed for resolve inssue with page reload with hash...

A *.htcaccess* file is needed for remove the /#/ hash from urls:

	RewriteEngine On
	RewriteBase /
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteCond %{REQUEST_FILENAME} !-d
	RewriteRule ^([^/]+)/?$ /#/$1 [L,NC]

**Documentation:**

* [https://visionmedia.github.io/page.js/](https://visionmedia.github.io/page.js/)

# Dependencies

Grunt task **copy.js** will read all bower.js files from **/bower_components** subfolders, and copy the file path from **main** node, like:

	//bower_components/requirejs/bower.json
	{
	  ...
	  "main": "require.js",
	  ...
	} 

And put this files into folder **/dist/lib/**.

If any installed dependency has no bower.json file (like lodash) you must edit the **copy.js** task to manually copy it:

	grunt.config.set('copy', {
		...
		lodash_: {
			cwd: 'bower_components/lodash/dist',
			src: 'lodash.js',
			dest: 'dist/lib/',
			expand: true
		},
		...
	});

If an unnecesaary file is copied (like boostrap.less):

	//bower_components/bootstrap/bower.json
	{
	  ...
	  "main": [
    	"less/bootstrap.less",
    	"dist/js/bootstrap.js"
	  ],
	  ...
	} 
	
you can delete it with the **clean-dist.js** task:

	//grunt/clean-dist.js
	grunt.registerTask('clean-dist', 'Clean dist folder', function() {
		...
		grunt.config.set('clean.files.src', ['dist/lib/bootstrap.less']);
		...
	});

# Contributing and issues

Contributors are welcome, please fork and send pull requests! If you have any ideas on how to make this project better then please submit an issue or send me an [email](mailto:mail@zguillez.io).

# License

©2016 Zguillez.io

Original code licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License) Open Source projects used within this project retain their original licenses.

# Changelog
### v1.3.0 (January 29, 2016)

- Add livereload 
- Auto copy dependecies fron bower.json file
- Fix Babel 6 compiler

### v1.2.0 (January 12, 2016)
- Fix yo install version

### v1.1.0 (Novembre 14, 2015) 
* Routing with Page.JS

### v1.0.0 (Novembre 6, 2015) 
* Initial ReactJS skeleton

Features:

* ReactJS
* React Templates
* Jade templating
* Jquery
* Sass
* Babel
* Grunt tasks




