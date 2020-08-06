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

  return `if (req.params.${parameters[2]} == undefined) return res.status(400).send('${parameters[3]}');

  ${parameters[0]}.findAll({
    where: {
      ${parameters[1].toLowerCase()}Id: req.params.${parameters[2]}
    }
  }).then(function (data) {

    return res.status(200).json(data);

  }).catch(function (error) {

    console.log(error);
    return res.status(500).send('${parameters[4]}');

  });`;

}

// return paramters for caramocha file
async function generateParameters(model) {

  return [
    (await ask("                  Child: ")),
    model,
    "id",
    "Not All Parameters Given.",
    "Internal Database Error"
  ];

}

// return parameters for OAPI 3.0 file
function generateOAPIParameters() {

  return [
    {
      "name": "id",
      "in": "path",
      "description": "ID of the requested object in the database.",
      "required": true,
      "schema": {
        "type": "integer",
        "format": "int32"
      },
      "style": "simple"
    }
  ];

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
