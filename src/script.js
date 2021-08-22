const fs = require('fs');

function script(path) {
  return fs.readFileSync(`${__dirname}/${path}`).toString();
}

module.exports = script;