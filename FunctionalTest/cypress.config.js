const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: false, // Add this line to disable support file
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});