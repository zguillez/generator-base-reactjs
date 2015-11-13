# generator-base-reactjs

[![Build Status](https://secure.travis-ci.org/zguillez/generator-base-reactjs.png?branch=master)](https://travis-ci.org/zguillez/generator-base-reactjs) [![Code Climate](https://codeclimate.com/github/zguillez/generator-base-reactjs/badges/gpa.svg)](https://codeclimate.com/github/zguillez/generator-base-reactjs)

> [Zguillez](https://zguillez.io) | Guillermo de la Iglesia

### Yeoman generator for ReactJS webapp development. With RequireJS, Bootstrap, Sass and templating with Jade. JSX compiled with Babel

![](http://zguillez.github.io/img/reactjs.png)

# Getting Started

### Install Yeoman

	npm install -g yo

### Yeoman Generators

To install generator-base-backbone from npm, run:

	npm install -g generator-base-reactjs

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


# Contributing and issues

Contributors are welcome, please fork and send pull requests! If you have any ideas on how to make this project better then please submit an issue or send me an [email](mailto:mail@zguillez.io).

# License

©2015 Zguillez.io

Original code licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License) Open Source projects used within this project retain their original licenses.

# Changelog

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




