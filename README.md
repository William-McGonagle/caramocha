# Caramocha
Generate entire website backends in under a minute.

## about
Caramocha is powered by an incredibly powerful templating scheme nicknamed Cophi.js. Cophi.js stands for 'Cophi Organizes Parts Headlessly in Javascript'. The idea of Cophi is that you can give it JSON objects, and from those objects, it can generate different items.

**Think of a cloud-** a user builds this cloud, and Cophi reorganizes it to look like different things. After Cophi is done, the cloud could look like a bunny, or a teacup, or a monkey.

**In real Life-** a user builds a caramocha object, *the cloud*, by running `caramocha start`. Then, the user can run `caramocha generateScript` to generate the website, or they could run `caramocha generateOAPI` to generate proper documentation.

With this mentality, the user can preform different actions very rapidly. This is helped by the fact that the `caramocha start` automatically fills out some parameters in the object to speed up the process.

### benifits
There are a few alternative programs to generate website backends, but many of them will give you a virus. Also, no other program features the Cophi templating scheme, so increased speed, small file size, and other benefits are non-existent. Finally, few of these sites will generate OpenAPI3.0 files for your website, or NPM dependencies. All of these items will help speed up the development of your project tremendously.

### templates
Carmocha already has a few different endpoint templates that websites can be built with. These templates take in parameters, which are generated along with the caramocha object file.

If you want to add templates to the Caramocha file system, look at some of the templates on the git repository. The templates are stored in the `/templates` directory. To add a template, create an issue with the code for the template on Github.

## how to use
- `caramocha start`
  - Generates the caramocha object file that allows all of the other commands to be run.
- `caramocha generate`
  - Generates NPM package file, OpenAPI 3.0 file, and the script for the website.
- `caramocha generateNPM`
  - Generates the NPM package file for your website.
- `caramocha generateScript`
  - Generates the script for your website.
- `caramocha generateOAPI`
  - Generates a OpenAPI 3.0.1 file for your website.
- `caramocha help`
  - Get help on how to use caramocha. It gives a quick rundown on how each caramocha command interacts with you and one another.
