var commandExplainations = {
  'start': "The start command is used to generate the file that Caramocha uses to create the website.",
  'generate': "The generate command is used to generate all of the files that you will need to run the website. But, you will need a caramocha.json file in the current working directory to run this command. To create a caramocha.json file, run the start command.",
  'generateNPM': "The generateNPM command is used to generate ONLY a package.json file that will hold all of the dependencies. This file is used so that the website can be ported from device to device without a hastle.",
  'generateScript': "The generateScript command is used to generate ONLY the index.js file. This file will hold your entire website, but it can be re-generated at any time.",
  'generateOAPI': "The generateOAPI command is used to generate an OpenAPI file. This file is stored in the YAML file format and can be imported into Postman, and other development tools.",
  'help': "You are here already."
};

function run() {

  for (var command in commandExplainations) {

    console.log(`\n# "${command}"\n${commandExplainations[command]}\n`);

  }

}

module.exports.run = run;
