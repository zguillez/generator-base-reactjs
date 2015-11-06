'use strict';
module.exports = function(grunt) {
	grunt.config.set('reactTemplates', {
		dist: {
			src: ['src/templates/**/*.rt'],
			options: {
				modules: 'none',
				format: 'stylish'
			}
		}
	});
};