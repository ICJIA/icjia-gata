const dirTree = require('directory-tree');
const _ = require('lodash')
String.prototype.camelCaseToDashed = function(){
  return this.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
// Usage
let arr = [JSON.stringify('/')]
const tree = dirTree('./src/views', ['.vue'], (item, PATH) => {
  x = String(item.path).camelCaseToDashed();

  //TODO: Convert to regex
  x = _.replace(x,"src\\","")
  x = _.replace(x,"views\\","")
  x = _.replace(x,"src/","")
  x = _.replace(x,"views/","")
  x = _.replace(x,".vue","")
  x = _.replace(x,"\\","/")
  x = _.replace(x,"\\","/")

  // TODO: Check for underscore prefix on filename to ignore page for prerendering
  if (x != 'home') {
    arr.push(JSON.stringify('/'+x));
  }
});
//console.log(arr)
myFile = 'module.exports = [' + arr + ']';

var fs = require('fs');
fs.writeFile("./src/routesToPrerender.js", myFile, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("routesToPrerender.js was saved.");
});
