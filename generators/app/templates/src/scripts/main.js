'use strict';
require.config({
	paths: {
		text: '../lib/text',
		react: '../lib/react',
		jsx: '../lib/jsx',
		react_dom: '../lib/react-dom',
		underscore: '../lib/lodash.min',
		jquery: '../lib/jquery.min',
		bootstrap: '../lib/bootstrap.min'
	}
});
window.app = {};
require(['react', 'jquery', 'underscore'], function(React, $, _) {
	require(['react_dom', 'bootstrap'], function(ReactDOM, Bootstrap) {
		require(['../js/components/header', '../js/components/footer', '../js/components/content'], function(Header, Footer,
			Content) {
			var Main = React.createClass({
				render: function() {
					return (
						<div className="container">
							<Header/>
							<Content />
							<Footer/>
						</div>
					);
				}
			});
			ReactDOM.render(<Main/>, document.getElementById('app'));
		});
	});
});