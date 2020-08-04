const readline = require('readline');

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, (input) => resolve(input) );
  });
}

// return finished code
function generateCode(parameters) {

  var output = "  if (req.params." + parameters[1] + " == undefined || ";
  var createData = "";

  for (var i = 6; i < parameters.length; i++) {

    output += "req.body." + parameters[i] + " == undefined";
    if (i != parameters.length - 1) output += " || ";

    createData += parameters[i] + ": req.body." + parameters[i].toLowerCase() + ",\n";

  }

  output += `) return res.status(400).send('${parameters[3]}');\n\n`;

  output += ` ${parameters[0]}.findOne({
    where: {
      id: req.body.${parameters[1]}
    }
  }).then(function (data) {

    if (data == null) return res.status(404).send('${parameters[4]}');

    data.create${parameters[2]}({
      ${createData}
    }).then(function (secondData) {

      return res.status(200).json(secondData);

    }).catch(function (error) {

      console.log(error);
      return res.status(500).send('${parameters[5]}');

    });

  }).catch(function (error) {

    console.log(error);
    return res.status(500).send('${parameters[5]}');

  });`;

  return output;

}

// return parameters for caramocha file
async function generateParameters(model, parameters) {

  var param = [];

  for (var parameter in parameters) {

    param.push(parameter);

  }

  return ([
    model,
    "id",
    (await ask("Child: ")),
    "Not All Parameters Given.",
    "Parent Not Found.",
    "Internal Database Error."
  ].concat(param));

}

// return parameters for OAPI 3.0 file
function generateOAPIParameters() {

  return [];

}

// return responses for OAPI 3.0 file
function generateOAPIResponses() {

  return {
    "200": {
      "description": "Action successfully performed."
    },
    "400": {
      "description": "Not all of the parameters were given to the server."
    },
    "404": {
      "description": "The requested item was not found on the server."
    },
    "500": {
      "description": "Internal Server Error."
    }
  };

}

module.exports = {
  generateCode,
  generateParameters,
  generateOAPIParameters,
  generateOAPIResponses
};
