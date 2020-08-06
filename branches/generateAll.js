function run() {

  console.log();

  require('./generateNPM.js').run();
  require('./generateOAPI.js').run();
  require('./generateScript.js').run();

  console.log();
  console.log("\033[1mEverything's Ready to Go!\033[0m");

}

module.exports.run = run;
