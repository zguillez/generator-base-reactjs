define(['react', 'components/header', 'components/footer'], function(React, Header, Footer) {
	'use strict';
	var Content = React.createClass({
		getInitialState: function() {
			return {
				libs: []
			};
		},
		componentDidMount: function() {
			$.get('data/data.json', function(result) {
				if (this.isMounted()) {
					var libs = [];
					for (var i = 0; i < result.length; i++) {
						libs.push(
							<a key={result[i].name} href={result[i].url} target="_black" className="btn btn-default btn-sm">{result[i].name}</a>
						);
					}
					this.setState({
						libs: libs
					});
				}
			}.bind(this));
		},
		render: function() {
			return (
				<div className="container">
					<Header/>
					<section className="content">
				    	<header>
				    		<img src="images/reactjs.png" className="logo" />
				    	</header>
				    	<div className="buttons row">
							{this.state.libs}	
						</div>
					</section>
					<Footer/>
				</div>
			);
		}
	});
	return Content;
});