var fs = require("fs");

var fileToRead = process.argv[2];
var numOfNewLines = 0;

var readFile = fs.readFile(fileToRead, 'utf8', function doneReading(error, data) {
  if (error) { 
    console.error(error); 
  } else {
    console.log(data.split('\n').length - 1);
  }
});