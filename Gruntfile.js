module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        browserify: {
            js: {
                src: 'app/js/app.js',
                dest: 'dist/js/app.js'
            }
        },
        copy: {
            all: {
                expand: true,
                cwd: 'app/',
                src: ['**/*.html', '**/*.css', '**/*.png', '**/*.jpeg', 'plugins/**/*'],
                dest: 'dist/'
            }
        },
        watch: {
            options: {
                livereload: true
            },
            js: {
                files: 'app/js/**/*.js',
                tasks: ['browserify', 'copy']
            },
            html: {
                files: 'app/**/*.html',
                tasks: 'copy'
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: 'dist',
                    hostname: 'localhost',
                    livereload: true,
                    open: true
                }
            }
        }
    });

    grunt.registerTask('build', ['browserify', 'copy']);
    grunt.registerTask('default', ['connect', 'watch']);
};