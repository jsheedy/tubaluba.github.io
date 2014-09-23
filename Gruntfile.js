module.exports = function(grunt) {

  grunt.initConfig({

    connect: {
      server: {
        options: {
          port: 8080,
          debug: true
        }
      }
    },

    watch: {
      files: ['src/*.html', 'js/*.js', 'css/*.css', 'css/*.less', 'Gruntfile.js', 'templates/*.handlebars'],
      tasks: ['build']
    },

    less: {
      production: {
        options: {
        },
        files: {
          "css/tubalubaband.css": "css/tubalubaband.less"
        }
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        },
        files: {
          'index.html': 'src/index.html'
        }
      }
    },

    cssmin: {
      combine: {
        files: {
          'build/main.min.css': [
            'css/thirdparty/bootstrap.min.css',
            'css/thirdparty/ekko-lightbox.min.css',
            'css/thirdparty/slim-081711.css',
            'css/thirdparty/css?family=Changa+One',
            'css/tubalubaband.css'
          ]
        }
      }
    },

    shell: {
      db: {
        command: 'bin/sqlite_to_json.py'
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'js/*.js']
    },

    uglify: {
      options: {
        mangle: true,
        compress: true,
        sourceMap: true,
        preserveComments: false
      },
      js: {
        files: {
          'build/main.min.js': [
            'js/thirdparty/jquery-2.1.1.min.js',
            'js/thirdparty/bootstrap.js',
            'js/thirdparty/ekko-lightbox.min.js',
            'js/thirdparty/handlebars.runtime-v1.3.0.js',
            'js/thirdparty/lscache.min.js',
            'js/thirdparty/instafeed.min.js',
            'js/thirdparty/moment.min.js',
            'build/templates.js',
            'js/calendar.js',
            'js/photos.js',
            'js/jquery.mailme.js',
            'js/main.js'
          ]
        }
      }
    },

    handlebars: {
      options: {
        namespace: "Tubaluba.Templates",
        processName: function(filePath) {
          return filePath.replace(/^templates\//, '').replace(/\.handlebars$/, '');
        }
      },

      all: {
        files: {
          "build/templates.js": ["templates/*.handlebars"]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('serve', [
    'connect:server',
    'build',
    'watch'
    ]);
  grunt.registerTask('build', ['less', 'htmlmin', 'cssmin', 'jshint', 'handlebars', 'uglify']);
  grunt.registerTask('default', ['serve']);

};
