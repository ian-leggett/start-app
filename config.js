const path = require('path');

module.exports = {
  "dirs" : {
    "jsDir" : path.join(__dirname, 'app', 'js')
  },
  "distDir" : path.join(__dirname, 'dist'),
  "specsDir" : path.join(__dirname, 'app', 'specs')
};