const script = require('../bin/script-generator.js');
const fs = require('fs');
const path = require('path');

function run() {

  var caramochaObject = JSON.parse(fs.readFileSync(path.join(process.cwd(), "./caramocha.json")));
  var output = "";

  output += script.sectionDelimiter('imports') + "\n";

  output += script.require({
    'express': 'express',
    'Sequelize': 'sequelize',
    'jwt': 'jsonwebtoken',
    'bcrypt': 'bcrypt'
  }) + "\n";

  output += script.sectionDelimiter('models') + "\n";

  for (var i = 0; i < caramochaObject.objects.length; i++) {

    output += script.sequelizeObject(caramochaObject.objects[i].name, caramochaObject.objects[i].model) + "\n";

  }

  output += script.sectionDelimiter('endpoints') + "\n";

  for (var i = 0; i < caramochaObject.objects.length; i++) {

    for (var n = 0; n < caramochaObject.objects[i].paths.length; n++) {

      var template = require("../templates/" + caramochaObject.objects[i].paths[n].type + ".js");
      var internalText = template.generateCode(caramochaObject.objects[i].paths[n].params);

      output += script.endpoint(internalText, caramochaObject.objects[i].paths[n].method, caramochaObject.objects[i].paths[n].path) + "\n\n";

    }

  }

  fs.writeFileSync(path.join(process.cwd(), "./index.js"), output);

  console.log("Generated Website Script.");

}

module.exports.run = run;
