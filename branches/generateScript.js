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

  output += script.sectionDelimiter('objects') + "\n";

  output += `var sequelize = new Sequelize('${caramochaObject.sequelize.db}', '${caramochaObject.sequelize.username}', '${caramochaObject.sequelize.password}', ${JSON.stringify(caramochaObject.sequelize.options, null, 4)});\n`;
  output += "const app = express();\n";
  output += "const port = process.env.PORT || 8000;\n\n";

  output += script.sectionDelimiter('models') + "\n";

  for (var i = 0; i < caramochaObject.objects.length; i++) {

    output += script.sequelizeObject(caramochaObject.objects[i].name, caramochaObject.objects[i].model) + "\n";

  }

  for (var i = 0; i < caramochaObject.objects.length; i++) {

    if (caramochaObject.objects[i].hasMany != undefined) {

      for (var n = 0; n < caramochaObject.objects[i].hasMany.length; n++) {

        output += `${caramochaObject.objects[i].name}.hasMany(${caramochaObject.objects[i].hasMany[n]});\n`;

      }

    }

  }

  output += "\nsequelize.sync();\n\n";

  output += script.sectionDelimiter('endpoints') + "\n";

  for (var i = 0; i < caramochaObject.objects.length; i++) {

    for (var n = 0; n < caramochaObject.objects[i].paths.length; n++) {

      console.log(path.join(__dirname, "../templates/" + caramochaObject.objects[i].paths[n].type + ".js"));

      if (fs.existsSync(path.join(__dirname, "../templates/" + caramochaObject.objects[i].paths[n].type + ".js"))) {

        var template = require(path.join(__dirname, "../templates/" + caramochaObject.objects[i].paths[n].type + ".js"));
        var internalText = template.generateCode(caramochaObject.objects[i].paths[n].params);

        output += script.endpoint(internalText, caramochaObject.objects[i].paths[n].method, caramochaObject.apiBase + caramochaObject.objects[i].path + caramochaObject.objects[i].paths[n].path) + "\n\n";

      }

    }

  }

  output += script.sectionDelimiter('end code') + "\n\n";
  output += `app.listen(port, () => {console.log('Example app listening at http://localhost:' + port)});`;

  fs.writeFileSync(path.join(process.cwd(), "./index.js"), output);

  console.log("Generated Website Script.");

}

module.exports.run = run;
