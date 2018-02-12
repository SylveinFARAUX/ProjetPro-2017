const webpackConfig = require('./webpack.config.js');
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.initConfig({
        'babel': {
            options: {
                sourceMap: false,
                presets: ['env']
            },
            build: {
                files: {
                    'client/build/js/wwae.babel.js': 'client/build/js/wwae.js'
                }
            }
        },
        'webpack': {
            options: {
                stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
            },
            prod: webpackConfig
        },
        'exec': {
            'uglify': 'uglifyjs client/build/js/wwae.babel.js -o client/build/js/wwae.babel.min.js'
        },
        'clean':{
            build: ['client/build/js/*']
        },
        'watch': {
            scripts: {
                files: ['client/js/**/*.js'],
                tasks: ['build'],
            },
        }
    });
    grunt.registerTask('build', ['webpack', 'babel', 'uglify']);
    grunt.registerTask('uglify', ['exec:uglify']);
    grunt.registerTask('default', ['clean','build']);
};