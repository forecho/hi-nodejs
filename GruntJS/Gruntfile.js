/*
* @Author: forecho
* @Date:   2015-08-10 23:03:58
* @Last Modified by:   forecho
* @Last Modified time: 2015-08-10 23:06:57
*/
module.exports = function(grunt){
    grunt.initConfig({
        uglify: {
            build: {
                src: ['js/app.js'],
                dest: 'js/app.min.js'
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
};