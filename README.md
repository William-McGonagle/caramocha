# 🍨 Caramocha
### Generate An Entire Website Backend in Under a Minute.
[![npm_stats](https://img.shields.io/badge/dynamic/json?label=npm&query=downloads&suffix=%20downloads&url=https%3A%2F%2Fapi.npmjs.org%2Fdownloads%2Fpoint%2Flast-week%2Fcaramocha)](https://www.npmjs.com/package/caramocha) 
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/william-mcgonagle/caramocha)
![GitHub last commit](https://img.shields.io/github/last-commit/william-mcgonagle/caramocha)
![GitHub stars](https://img.shields.io/github/stars/william-mcgonagle/caramocha?style=social)

![eye-catcher](https://github.com/William-McGonagle/caramocha/raw/master/promotional/eye-catcher.png)

## how to use
The first step in getting your website built with Caramocha is getting it installed. Caramocha is not dependent on any other packages, so the installation should be quick and smooth. Since Caramocha is build in Node.js, we opted into using NPM as the installation manager of the CLI. If you do not have NPM, quickly look up a tutorial before you run the Caramocha installation command. 

![npm](https://github.com/William-McGonagle/caramocha/raw/master/promotional/npm.png)

Once you have Caramocha installed, you can start building your website with it. If you have a `caramocha.json` file in your current working directory, you can skip this step, but otherwise, that is what we are generating.

A `caramocha.json` file stores all of the information about how you want your website to act, behave, and achieve greatness. When you run this command, Caramocha will bring you through a quick survey about the information, url paths and database objects of the site. Answer all of these questions to the best of your ability. And remember, a blank answer is fine, but restarting wastes all your precious time. 

After you run this command, you can always edit the `caramocha.json` file directly to perfect your answers. 

![start](https://github.com/William-McGonagle/caramocha/raw/master/promotional/caramocha-start.png)

Once you have the `caramocha.json` file, you can start generating the website resources. There are currently four different commands that you can run: `generate`, `generateScript`, `generateOAPI`, and `generateNPM`. These all do what they sound like- importantly, the `generate` command runs the three other commands. This means that you will have the code, the documentation, and the NPM files. But, if you want to individually generate each document, run the each sub-command individually.

![generate](https://github.com/William-McGonagle/caramocha/raw/master/promotional/caramocha-generate.png)

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
