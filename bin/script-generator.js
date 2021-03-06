// usage
  // innerText -> stuff inside the endpoint
  // method -> GET, POST, HEAD, DELETE, PUT, ALL
  // path -> the path of the endpoint

function endpoint(innerText, method, path) {

  return `app.${method}('${path}', function (req, res) {\n\n${innerText}\n\n});`;

}

// usage
  // text -> label of the section

function sectionDelimiter(text) {

  return new Array(text.length + 7).join("/") + '\n// ' + text.toUpperCase() + ' //\n' + new Array(text.length + 7).join("/") + "\n";

}

// usage
  // name -> name of the sequelize object being created
  // params -> object of the sequelize object's parameters

function sequelizeObject(name, params) {

  var simpleParams = "";

  for (var param in params) {

    simpleParams += ` ${param}: Sequelize.${params[param].toUpperCase()},\n`;

  }

  return (`var ${name} = sequelize.define('${name.toLowerCase()}', {\n${simpleParams}});\n`);

}

// usage
  // libraries -> libraries that need to be required

function require(libraries) {

  var output = "";

  for (var library in libraries) {

    output += `const ${library} = require('${libraries[library]}');\n`;

  }

  return output;

}

module.exports = {
  endpoint: endpoint,
  sectionDelimiter: sectionDelimiter,
  sequelizeObject: sequelizeObject,
  require: require
};
