const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      //  experimentalModifyObstructiveThirdPartyCode: true
      // implement node event listeners here
    },
  },
});
