const readline = require('readline');
const fs = require('fs');
const path = require('path');

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, (input) => resolve(input) );
  });
}

async function run() {

  console.log();
  let name = await ask(" website name: ");

  let version = await ask(" version: ");

  let description = await ask(" description: ");

  let apiBase = await(ask(" api base: (/api/v1/) "));

  let keywords = (await ask(" keywords (comma seperated): ")).split(',');

  let authorName = await ask(" author name: ");

  let useSequelize = ((await ask(" use default sequelize config? (Y/n) ")).toUpperCase() == 'Y');

  var sequelize = {};

  if (useSequelize) {

    sequelize = {
        "username": "username",
        "password": "password",
        "db": "database",
        "options": {
          "dialect": "sqlite",
          "storage": "./db.sqlite"
        }
    };

  } else {

    sequelize = {
        "username": "username",
        "password": "password",
        "db": "database",
        "options": {
          "dialect": "sqlite",
          "storage": "./db.sqlite"
        }
    };

  }

  var objects = [];

  var addingNewObjects = true;

  while (addingNewObjects) {

    addingNewObjects = ((await ask(" add another object? (Y/n)")).toUpperCase() == 'Y');

    if (addingNewObjects) {

      var objectName = (  await ask("      object name: "));
      var objectPath = (  await ask("      object path: "));
      var objectParams = {};
      var objectPaths = [];

      console.log("      object model: ");

      var addingNewObjectParams = true;

      while (addingNewObjectParams) {

        addingNewObjectParams = ((await ask("         add another model parameter? (Y/n) ")).toUpperCase() == 'Y');

        if (addingNewObjectParams) {

          var paramName = (await ask("            object param name: "));
          var paramType = (await ask("            object param type: (text, string, integer, boolean, date) "));

          objectParams[paramName] = paramType;

        }

      }

      console.log("      object paths: ");

      var addingNewObjectPaths = true;

      while (addingNewObjectPaths) {

        addingNewObjectPaths = ((await ask("         add another object path? (Y/n)")).toUpperCase() == 'Y');

        if (addingNewObjectPaths) {

          var paramPath = (await ask("            object param path: "));
          var paramMethod = (await ask("            object param method: "));
          var paramType = (await ask("            object param type: (GET, CREATE, LOGIN, SIGNUP) "));
          var paramParams = [];

          if (fs.existsSync(path.join(__dirname, '../templates/' + paramType + ".js"))) {

             paramParams = (await require(path.join(__dirname, '../templates/' + paramType + ".js")).generateParameters(objectName));

          }

          objectPaths.push({
            path: paramPath,
            method: paramMethod,
            type: paramType,
            params: paramParams
          });

        }

      }

      objects.push({
        name: objectName,
        path: objectPath,
        model: objectParams,
        paths: objectPaths
      });

    }

  }

  var file = {
    name: name,
    version: version,
    description: description,
    apiBase: apiBase,
    author: authorName,
    keywords: keywords,
    description: description,
    sequelize: sequelize,
    objects: objects
  };

  fs.writeFileSync(path.join(process.cwd(), './caramocha.json'), JSON.stringify(file, null, 4));

  console.log();
  console.log(" SUCESSFULLY STARTED CARAMOCHA INSTANCE.");

}

module.exports.run = run;
