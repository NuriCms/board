/* global module:false */
module.exports = function(grunt) {
	"use strict";

	grunt.file.defaultEncoding = 'utf8';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['Gruntfile.js', 'tpl/js/*.js', 'skins/**/*.js', 'm.skins/**/*.js'],
			options : {
				globalstrict: false,
				undef : false,
				eqeqeq: false,
				browser : true,
				globals: {
					"jQuery" : true,
					"console" : true,
					"window" : true
				},
				ignores : [
					'skins/xe_2010_gallery/js/jquery.easing.1.3.js',
					'skins/xe_2010_gallery/js/json2007.js',
					'**/*.min.js',
					'**/*.compressed.js'
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint']);
};
