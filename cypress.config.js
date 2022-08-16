const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
};

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    supportFile: false,
    setupNodeEvents,
    "reporter": "cypress-mochawesome-reporter",
    "reporterOptions": {
    "reportDir": "docs/reports",
    "charts": true,
    "reportPageTitle": "My Test Suite",
    "embeddedScreenshots": true,
    "inlineAssets": true
  },
  "video": false,
    devServer: {
      delay: 500,
      force404: false,
      ignore: (xhr) => {
          return true;
    },
  },
  },
});


