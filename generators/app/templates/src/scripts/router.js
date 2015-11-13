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