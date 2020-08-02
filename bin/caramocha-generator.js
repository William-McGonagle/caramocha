const fs = require('fs');
const path = require('path');

var fileData = {
  "name": "name",
  "version": "0.0.0",
  "description": "description",
  "keywords": [],
  "author": "author",
  "apiBase": "/api/v1/",
  "sequelize": {
    "db": "database",
    "username": "username",
    "password": "password",
    "options": {
      "dialect": "sqlite",
      "storage": "./db.sqlite"
    }
  },
  "objects": [
    {
      "name": "Post",
      "path": "post",
      "model": {
        "likes": "integer",
        "text": "text"
      },
      "paths": [
        {
          "path": "",
          "method": "get",
          "type": "GET",
          "params": [
            "Post"
          ]
        }
      ]
    }
  ]
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

function generateCaramochaFile() {

  fs.writeFileSync(path.join(process.cwd, './caramocha.json'), JSON.stringify(fileData, 4, null));

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
