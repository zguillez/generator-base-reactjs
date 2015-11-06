'use strict';
module.exports = function(grunt) {
	grunt.config.set('babel', {
		options: {
			sourceMap: false
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