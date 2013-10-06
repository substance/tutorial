var Converter = require("substance-converter");
var ConverterServer = require("substance-converter/src/server");
var fs = require('fs');
var helloDoc = fs.readFileSync(__dirname + "/hello-world.md", "utf8");
var converter = new ConverterServer();

converter.convert(helloDoc, 'markdown', 'substance', function(err, doc) {
  if (err) {
    console.error(err);
    // return res.send(500, err);
  }

  fs.writeFileSync(__dirname + "/hello-world.json", JSON.stringify(doc, null, '  '));
  // res.send(output);
});