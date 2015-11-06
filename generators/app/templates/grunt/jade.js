'use strict';
module.exports = function(grunt) {
	grunt.config.set('jade', {
		compile: {
			options: {
				client: false,
				pretty: false
			},
			files: [{
				expand: true,
				cwd: "src/templates/",
				dest: "src/templates/rt/",
				src: "*.jade",
				ext: ".rt"
			}]
		}
	});
};