const path = require('path');

module.exports = {
  "dirs" : {
    "jsDir" : path.join(__dirname, 'app', 'js'),
    "scssDir" : path.join(__dirname, 'app', 'scss')
  },
  "distDir" : path.join(__dirname, 'dist'),
  "specsDir" : path.join(__dirname, 'app', 'specs')
};