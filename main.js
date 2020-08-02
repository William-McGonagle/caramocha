var branches = {
  'start': require('./branches/start.js'),
  'generate': require('./branches/generateAll.js'),
  'generateNPM': require('./branches/generateNPM.js'),
  'generateScript': require('./branches/generateScript.js'),
  'generateOAPI': require('./branches/generateOAPI.js'),
  'help': require('./branches/help.js')
};

if (process.argv[2] == undefined) return console.log('Please specify a command... type help for a list of commands.');
if (branches[process.argv[2]] == undefined) return console.log('Unknown command... type help for a list of commands.');

branches[process.argv[2]].run();

process.exit();
