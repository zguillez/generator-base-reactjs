'use strict';
module.exports = function(grunt) {
	grunt.initConfig({});
	require('load-grunt-tasks')(grunt);
	require('./grunt/eslint')(grunt);
	require('./grunt/clean')(grunt);
	require('./grunt/jade')(grunt);
	require('./grunt/reactTemplates')(grunt);
	require('./grunt/copy')(grunt);
	require('./grunt/replace')(grunt);
	require('./grunt/sass')(grunt);
	require('./grunt/uglify')(grunt);
	require('./grunt/connect')(grunt);
	require('./grunt/open')(grunt);
	require('./grunt/watch')(grunt);
	require('./grunt/reload')(grunt);
	require('./grunt/babel')(grunt);
	grunt.registerTask('default', ['serve']);
	grunt.registerTask('serve', function() {
		grunt.task.run(['clean', 'eslint', 'sass', 'jade', 'copy', 'replace', 'reactTemplates', 'babel', 'connect', 'open', 'watch']);
	});
	grunt.registerTask('build', function() {
		grunt.task.run(['clean', 'eslint', 'sass', 'jade', 'copy', 'replace', 'reactTemplates', 'babel']);
	});
	grunt.registerTask('rebuild', function() {
		grunt.task.run(['clean', 'sass', 'jade', 'copy', 'replace', 'reactTemplates', 'babel']);
	});
};