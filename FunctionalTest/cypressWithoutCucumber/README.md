# Automação de Testes no AutomationExercise com Cypress

Projeto de automação de testes para o site [AutomationExercise](https://automationexercise.com) utilizando o framework Cypress.

## 📋 Casos de Teste Implementados

- ✅ **Test Case 1**: Register User
- ✅ **Test Case 9**: Search Product
- ✅ **Test Case 12**: Add Products in Cart
- ✅ **Test Case 13**: Verify Product quantity in Cart
- ✅ **Test Case 17**: Remove Products From Cart

## ⚙️ Pré-requisitos

- Node.js (versão 16 ou superior)
- NPM ou Yarn
- Cypress (instalado via npm)

## 🚀 Configuração Inicial

1. Clone o repositório:
   ```bash
   git clone [URL_DO_REPOSITORIO]
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd OutseraChallenge/FunctionalTest
   ```
3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

## 🧪 Executando os Testes

1. Para abrir o Test Runner do Cypress:
   ```bash
   npx cypress open
   ```
   - Escolha o navegador desejado e clique no teste que deseja executar.

2. Para executar os testes em modo headless:
   ```bash
   npx cypress run
   ```

## 📂 Estrutura do Projeto

- `cypress/e2e/`: Contém os arquivos de teste implementados.
- `cypress/screenshots/`: Capturas de tela geradas durante a execução dos testes.
- `cypress/downloads/`: Arquivos baixados durante os testes.

## 🛠️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/): Framework de automação de testes end-to-end.
- [Node.js](https://nodejs.org/): Ambiente de execução JavaScript.

## 📝 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais informações.