'use strict';
var path = require('path');

module.exports = function (grunt) {
  grunt.initConfig({
    express: {
      options: {
        port: 8000,
        hostname: '*'
      },
      livereload: {
        options: {
          server: path.resolve('./start/server.js'),
          livereload: true,
          serverreload: true,
          bases: [path.resolve('./public')]
        }
      }
    },

    sass: {
      dist: {
        files: {
          'public/styles/main.css': 'sass/main.scss'
        },
        options: {
            includePaths: [
            './bower_components/bower-bourbon'
          ]
        }
      }
    },
    watch: {
       source: {
        files: ['sass/**/*.scss', 'views/**/*.handlebars'],
        tasks: ['sass'],
         options: {
           livereload: true, 
         }
       }
     }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');
  grunt.registerTask('default', ['sass','express','express-keepalive']);

};