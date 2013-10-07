var fs = require('fs');
var Converter = require("substance-converter");

// Parse command line arguments
// -----------

var inputFile = process.argv[2];
var outputFile = process.argv[3];

// Read markdown input
// -----------

var inputDoc = fs.readFileSync(inputFile, "utf8");

// Do the converstion
// -----------

var converter = new Converter();

converter.convert(inputDoc, 'markdown', 'substance', function(err, doc) {
  if (err) {
    return console.error(err);
  }
  fs.writeFileSync(outputFile, JSON.stringify(doc, null, '  '));
});