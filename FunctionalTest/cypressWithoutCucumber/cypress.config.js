const { defineConfig } = require("cypress")
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)]
      })
      on("file:preprocessor", bundler)
      await addCucumberPreprocessorPlugin(on, config)


            // Configuração adicional para encontrar steps
            config.env.cucumber = {
              stepDefinitions: "cypress/e2e/step-definitions/*.js"
            }
      return config
    }

    
  }
})