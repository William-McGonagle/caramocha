const fs = require('fs');
const path = require('path');

var fileData = {
  "name": "name",
  "version": "0.0.0",
  "description": "description",
  "main": "index.js",
  "scripts": {},
  "repository": {},
  "keywords": [],
  "dependencies": {
    "express": "^4.17.1"
  },
  "author": "author",
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

  fs.writeFileSync(path.join(process.cwd, './package.json'), JSON.stringify(fileData, 4, null));

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
