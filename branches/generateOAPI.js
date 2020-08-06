const fs = require('fs');
const path = require('path');

function run() {

  var caramochaFile = fs.readFileSync(path.join(process.cwd(), './caramocha.json')).toString();
  var caramochaData = JSON.parse(caramochaFile);

  var outData = {
    openapi: '3.0.1',
    info: {
      version: caramochaData.version,
      title: caramochaData.name,
      description: caramochaData.description,
      termsOfService: '',
      contact: {
        name: caramochaData.author,
        email: '',
        url: ''
      },
      license: {
        name: 'Apache 2.0',
        url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
      }
    },
    servers: [
      {
        url: 'http://localhost:8000/',
        description: 'Local server'
      }
    ],
    tags: [],
    paths: {}
  };

  for (var n = 0; n < caramochaData.objects.length; n++) {

    outData.tags.push({
      name: caramochaData.objects[n].name
    });

    for (var i = 0; i < caramochaData.objects[n].paths.length; i++) {

      if (fs.existsSync(path.join(__dirname, '../templates/' + caramochaData.objects[n].paths[i].type + '.js'))) {

        var currentPath = caramochaData.apiBase + caramochaData.objects[n].name + caramochaData.objects[n].paths[i].path;
        outData.paths[currentPath] = {};
        outData.paths[currentPath][caramochaData.objects[n].paths[i].method] = {
          tags: [
            caramochaData.objects[n].name
          ],
          description: "",
          operationId: (caramochaData.objects[n].name + caramochaData.objects[n].paths[i].path).toUpperCase(),
          parameters: require(path.join(__dirname, '../templates/' + caramochaData.objects[n].paths[i].type + '.js')).generateOAPIParameters(), // generate parameters from TYPE
          responses: require(path.join(__dirname, '../templates/' + caramochaData.objects[n].paths[i].type + '.js')).generateOAPIResponses() // generate responses from TYPE
        };

      }

    }

  }

  fs.writeFileSync(path.join(process.cwd(), "./api.json"), JSON.stringify(outData, null, 4));

  console.log(" ✅  Sucessfully Generated OpenAPI File.");

}

module.exports.run = run;
