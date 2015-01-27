'use strict';

var config = require('./config');

var cssmin = {
  dist: {
    expand: true,
    cwd: config.build + '/src',
    src: [
      '**/*.css'
    ],
    dest: config.dist
  }
};

module.exports = cssmin;
