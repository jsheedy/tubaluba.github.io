module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
      options: {
        report: 'gzip',
        compress: true,
        sourceMap: true
      },
      js: {
        files: { 
            'build/all.js': [
            "js/lscache.min.js",
            "js/handlebars.runtime-v1.3.0.js",
            "js/calendar-template.js",
            "js/calendar.js",
            "js/photos-template.js",
            "js/photos.js",
            "js/jquery.mailme.js",
            "js/bootstrap.js",
            "js/bootstrap-lightbox.min.js",
            "js/ekko-lightbox.min.js",
            "js/instafeed.min.js",
            "js/main.js"
            ]
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
