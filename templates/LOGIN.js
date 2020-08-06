// return finished code
function generateCode(parameters) {

  return `  if (req.body.username == undefined || req.body.password == undefined) return res.status(400).send('${parameters[2]});

  ${parameters[0]}.findOne({
    where: {
      ${parameters[1]}: req.body.username
    }
  })`;

}

// return paramters for caramocha file
function generateParameters(model) {

  return [];

}

// return parameters for OAPI 3.0 file
function generateOAPIParameters() {

  return [];

}

// return responses for OAPI 3.0 file
function generateOAPIResponses() {

  return {};

}

module.exports = {
  generateCode,
  generateParameters,
  generateOAPIParameters,
  generateOAPIResponses
};
