'use strict';
module.exports = function(grunt) {
	grunt.config.set('babel', {
		options: {
			sourceMap: true,
			presets: ['es2015', 'react']
		},
		dist: {
			files: [{
				expand: true,
				cwd: 'src/scripts/',
				dest: 'dist/js/',
				src: ['**/*.js']
			}]
		}
	});
};