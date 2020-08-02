// return finished code
function generateCode(parameters) {

  return `
  if (req.body.${parameters[1]} == undefined) return res.status(400).send('${parameters[2]}');

  ${parameters[0]}.findOne({
    where: {
      id: req.body.${parameters[1]}
    }
  }).then(function (data) {

    if (data == null) return res.status(404).send('${parameters[3]}');

    return res.json(data);

  }).catch(function (error) {

    console.log(error);
    return res.status(500).send('${parameters[4]}');

  });
  `;

}

// return paramters for caramocha file
function generateParameters(model) {

  return [
    model,
    "id",
    "Not All Parameters Given.",
    "Item Not Found.",
    "Internal Database Error."
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
