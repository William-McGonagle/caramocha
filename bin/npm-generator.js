const fs = require('fs');
const path = require('path');

var fileData = {
  "name": "",
  "version": "0.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {},
  "repository": {},
  "keywords": [],
  "dependencies": {},
  "author": "",
  "license": "UNLICENSED"
};

function setName(name) {

  if (name == undefined) return;

  fileData.name = name;

}

function setVersion(version) {

  if (version == undefined) return;

  fileData.version = version;

}

function setDescription(description) {

  if (description == undefined) return;

  fileData.description = description;

}

function setKeywords(keywords) {

  if (keywords == undefined) return;

  fileData.keywords = keywords;

}

function setAuthor(author) {

  if (author == undefined) return;

  fileData.author = author;

}

function addDependency(name, version) {

  if (name == undefined || version == undefined) return;

  fileData.dependencies[name] = version;

}

function generateNPMFile() {

  fs.writeFileSync(path.join(process.cwd(), './package.json'), JSON.stringify(fileData, null, 4));

}

module.exports = {
  setName,
  setAuthor,
  setVersion,
  setKeywords,
  setDescription,
  addDependency,
  generateNPMFile
};
