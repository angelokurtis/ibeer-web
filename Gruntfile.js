module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        browserify: {
            js: {
                src: 'src/app/app.js',
                dest: 'dist/app/app.js',
                options: {
                    debug: true
                }
            }
        },
        copy: {
            all: {
                expand: true,
                cwd: 'src/',
                src: ['**/*.html', '**/*.css', '**/*.png', '**/*.jpeg', 'plugins/**/*'],
                dest: 'dist/'
            }
        },
        watch: {
            options: {
                livereload: true
            },
            js: {
                files: 'src/app/**/*.js',
                tasks: ['browserify', 'copy']
            },
            html: {
                files: 'src/**/*.html',
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