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