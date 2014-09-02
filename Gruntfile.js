module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

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
        report: 'gzip',
        compress: true,
        sourceMap: true
      },
      js: {
        files: { 
          'build/main.min.js': [
            'js/thirdparty/jquery-2.1.1.js',
            'js/thirdparty/bootstrap.js',
            'js/thirdparty/bootstrap-lightbox.min.js',
            'js/thirdparty/ekko-lightbox.min.js',
            'js/thirdparty/handlebars.runtime-v1.3.0.js',
            'js/thirdparty/lscache.min.js',
            'js/thirdparty/instafeed.min.js',
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

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-shell');

  // Default task(s).
  grunt.registerTask('default', ['shell', 'jshint', 'handlebars', 'uglify']);

};
