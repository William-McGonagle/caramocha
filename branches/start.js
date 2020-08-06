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
  let name = await ask(" website-name: ");

  let version = await ask(" version: ");

  let description = await ask(" description: ");

  let apiBase = await(ask(" api-base: (/api/v1/) "));
  if (apiBase == "") apiBase = "/api/v1";

  let keywords = (await ask(" keywords (comma seperated): ")).split(',');
  keywords.forEach((item, i) => {

    keywords[i] = item.trim();

  });

  let authorName = await ask(" author-name: ");

  let useSequelize = ((await ask(" default-sequelize-config? (Y/n) ")).toUpperCase() == 'Y');

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
        "username": (await ask(" sequelize-username: ")),
        "password": (await ask(" sequelize-password: ")),
        "db": (await ask(" sequelize-database: ")),
        "options": {
          "dialect": (await ask(" sequelize-dialect: ")),
          "storage": "./db.sqlite",
          "host": "localhost"
        }
    };

  }

  var objects = [];

  var addingNewObjects = true;

  while (addingNewObjects) {

    addingNewObjects = ((await ask(" add-object? (Y/n)")).toUpperCase() == 'Y');

    if (addingNewObjects) {

      var objectName = (  await ask("      object-name: "));
      var objectPath = (  await ask("      object-path: "));
      var objectParams = {};
      var objectPaths = [];

      console.log("      object-model: ");

      var addingNewObjectParams = true;

      while (addingNewObjectParams) {

        addingNewObjectParams = ((await ask("         add-model-parameter? (Y/n) ")).toUpperCase() == 'Y');

        if (addingNewObjectParams) {

          var paramName = (await ask("            object-parameter-name: "));
          var paramType = (await ask("            object-parameter-type: (text, string, integer, boolean, date) "));

          objectParams[paramName] = paramType;

        }

      }

      console.log("      object-paths: ");

      var addingNewObjectPaths = true;

      while (addingNewObjectPaths) {

        addingNewObjectPaths = ((await ask("         add-object-endpoint? (Y/n)")).toUpperCase() == 'Y');

        if (addingNewObjectPaths) {

          var paramPath = (await ask("            object-endpoint-path: "));
          var paramMethod = (await ask("            object-endpoint-method: ")).toLowerCase();
          if (!(paramMethod == "post" || paramMethod == "delete" || paramMethod == "get" || paramMethod == "put")) paramMethod = "get";

          var paramType = (await ask("            object-endpoint-template: "));
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
  console.log(" ✅  Successfully Started Caramocha Instance.");

}

module.exports.run = run;
