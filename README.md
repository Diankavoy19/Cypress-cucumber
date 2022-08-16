# Cypress-cucumber
### Description
[Cypress ](https://www.cypress.io/) is a next generation front end testing tool built for the modern web with software tool that supports behavior-driven development [cucumber](https://cucumber.io/).

### Setup
Before using cypress with cucumber, you need to install [node.js](https://nodejs.org/en/), install all the dependencies for doing the full operation of the node.js.

Dependencies:
- [cypress](https://www.npmjs.com/package/cypress)
- [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- [multiple-cucumber-html-reporter](https://www.npmjs.com/package/multiple-cucumber-html-reporter)
- [@cypress/browserify-preprocessor](https://www.npmjs.com/package/@cypress/browserify-preprocessor)


You need to add following to package.json
``` console
{
  "dependencies": {
    "@badeball/cypress-cucumber-preprocessor": "latest"
  },
  "cypress-cucumber-preprocessor": {
    "json": {
      "enabled": true,
      "output": "jsonlogs/log.json",
      "formater": "cucumber-json-formatter.exe"
    },
    "messages": {
      "enabled": true,
      "output": "jsonlogs/messages.ndjson"
    }
  }
```
and configure cypress.config.js
``` console 
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    supportFile: false,
    setupNodeEvents,
  },
});
```
Also you need to download [cucumber-json-formatter](https://github.com/cucumber/json-formatter/releases/tag/v19.0.0) according to your OS and rename this file to 
``` console 
cucumber-json-formatter.exe
```
Download git repository 
``` console
git clone https://github.com/Diankavoy19/Cypress-cucumber
```
and use install node modules.

After that we can run all our tests.
```console
npm run cypress:open 
```
or 
```console
npx cypress:run
```
or with config file for macbook-15
```console
npm run cypress:config
```
Also we can generate reports
``` console 
npm run cypress:report
```
You must have these result:
![](https://diankavoy19.github.io/TestRail-Homework/picture/Report.png)
![](https://diankavoy19.github.io/TestRail-Homework/picture/Report1.png)