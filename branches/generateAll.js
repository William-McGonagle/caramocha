function run() {

  require('./generateNPM.js').run();
  require('./generateOAPI.js').run();
  require('./generateScript.js').run();

  console.log("everything ready to go.");

}

module.exports.run = run;
