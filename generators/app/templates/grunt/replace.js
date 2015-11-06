'use strict';
module.exports = function(grunt) {
	grunt.config.set('replace', {
		require: {
			src: 'dist/templates/*.rt.js',
			overwrite: true,
			replacements: [{
				from: 'var',
				to: 'define([\'react\'], function(React) { return'
			}, {
				from: '};',
				to: '};});'
			}]
		}
	});
};