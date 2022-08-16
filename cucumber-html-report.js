const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "./docs/jsonlogs", // ** Path of .json file **//
  reportPath: "./docs/cucumber-htmlreport",
  metadata: {
    browser: {
      name: "chrome",
      version: "103",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
});