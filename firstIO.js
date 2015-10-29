var fs = require('fs');

var text = fs.readFileSync(process.argv[2], 'utf8');
var str = text.split('\n').length - 1;
console.log(str);