'use strict';


module.exports = function babel(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-babel');

    // Options
    return {
        build: {
            options: {
                presets: ["react"],
                plugins: ["transform-es2015-modules-amd"]
            },
            cwd: 'public/templates',
            src: '**/*.js',
            dest: '.build/templates/',
            expand: true,
            ext: '.js'
        }
    };
};
