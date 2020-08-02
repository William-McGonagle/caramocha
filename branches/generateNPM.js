const npm = require('../bin/npm-generator.js');
const fs = require('fs');
const path = require('path');

function run() {

  var caramochaObject = JSON.parse(fs.readFileSync(path.join(process.cwd(), './caramocha.json')));

  npm.setName(caramochaObject.name);
  npm.setVersion(caramochaObject.version);
  npm.setDescription(caramochaObject.description);
  npm.setKeywords(caramochaObject.keywords);
  npm.setAuthor(caramochaObject.author);

  npm.addDependency("express", "^4.17.1");
  npm.addDependency("sequelize", "^6.3.4");
  npm.addDependency("sqlite3", "^5.0.0");
  npm.addDependency("jsonwebtoken", "^8.5.1");
  npm.addDependency("bcrypt", "^5.0.0");

  npm.generateNPMFile();

  console.log("Successfully Generated NPM File");

}

module.exports.run = run;
