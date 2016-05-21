module.exports = function(grunt) {
   grunt.initConfig({
   browserify: {
   	js: {
       src: 'app/js/app.js',
       dest: 'dist/js/app.js',
       options: {
         external: ['angular'],
         debug: true,
         browserifyOptions: { debug: true }
       }
     }
   },
   copy: {
	   all: {
       expand: true,
       cwd: 'app/',
       src: [ '**/*.html', '**/*.css', '**/*.png', 
              '**/*.webm', '**/*.mp4', 'lib/**', 
              '**/*.eot', '**/*.svg', '**/*.ttf',
              '**/*.woff', '**/*.woff2'],
       dest: 'dist/',
     }, 
     files: {
      cwd: 'lib',
      src: '**/*', 
      dest: 'dist/lib',
      expand: true
    }
   },
   concat: {
      sass: {
        src: ['app/**/*.scss'],
        dest: 'dist/css/concat.scss'
      }
    },
    sass: {
      css: {
        options: {
          style: 'compressed',
          sourcemap: 'none'
        },
        files: {
          'dist/css/styles.css': 'dist/css/concat.scss'
        }
      }
   },
   compass: {
      dist: {
        options: {
          sassDir: 'app/sass',
          cssDir: 'app/sass',
          environment: 'production'
        }
      }
   },
   clean: {
      build: {
        force: true,
        src: ['dist']
      }
    },
   watch: {
    compass: {
      files: ['app/**/*.scss'],
      tasks: ['compass:dist']
    },
   	js: {
       files: "app/**/*.js",
       tasks: "browserify"
     },
     html: {
       files: 'app/**/*.html',
       tasks: 'copy'
     },
     scss: {
        files: 'app/**/*.scss',
        tasks: ['concat', 'sass', 'copy']
     },
     css: {
       files: 'app/**/*.css',
       tasks: 'copy'
     }
   },
   'http-server': {
      dev: {           
          root: './dist',           
          port: 8080,
          openBrowser : true,
          runInBackground: true 
      }
  },
 });
 
 // Load the npm installed tasks
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-http-server');

  // The default tasks to run when you type: grunt
  grunt.registerTask('default', ['concat', 'browserify', 'sass', 'copy', 'compass', 'http-server', 'watch']);
};
	 
	 