# Outsera Challenge

![Cypress](https://img.shields.io/badge/Cypress-14.2.1-brightgreen)
![Node.js](https://img.shields.io/badge/Node.js-22.14.0-blue)
![License](https://img.shields.io/badge/License-ISC-yellow)

## 📝 Sobre
Este repositório contém o desafio técnico da Outsera, utilizando o framework de testes E2E Cypress. O projeto foi estruturado seguindo o modelo **Page Objects**, que facilita a manutenção e reutilização de código.

## 📂 Estrutura do Projeto
Abaixo está a estrutura principal do projeto:

```
/cypress
  /e2e                # Testes E2E escritos em Cucumber e JavaScript
  /fixtures           # Dados estáticos usados nos testes (ex.: usuários, produtos)
  /pageObjects        # Classes que encapsulam elementos e ações das páginas
  /support            # Comandos customizados e configurações do Cypress
```

### 🧩 Page Objects
O modelo **Page Objects** foi implementado para organizar os seletores e ações de cada página. Isso melhora a legibilidade e facilita a manutenção dos testes.

## 🚀 Stacks Utilizadas
- **JavaScript**
- **Cypress** (v14.2.1)
- **Cucumber** (via `@badeball/cypress-cucumber-preprocessor`)
- **Node.js** (v22.14.0)

## ✅ Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas:
- Node.js (v22.14.0 ou superior)
- Gerenciador de pacotes `npm` ou `yarn`

## ⚙️ Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/outsera-challenge.git
   cd outsera-challenge
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

## 🧪 Execução dos Testes

### 🖥️ Via Interface Gráfica
1. Execute o comando:
   ```bash
   npx cypress open
   # ou
   yarn cypress open
   ```
2. Escolha o navegador e selecione o teste desejado.

### 🏃 Em Modo Headless
1. Execute todos os testes:
   ```bash
   npx cypress run
   # ou
   yarn cypress run
   ```
2. O relatório será gerado na pasta `cypress/report`.

## 🤖 Execução com Github Actions
![GitHub Actions](https://img.shields.io/github/actions/workflow/status/seu-usuario/outsera-challenge/main.yml?label=E2E%20Tests)

1. Realize o fork do repositório.
2. Acesse o workflow em `Actions` > `outsera-web-cypress/actions/workflows/main.yml`.
3. Clique em **Run workflow** e confirme a execução na branch `main`.
4. Após a execução, visualize os resultados no step **Run E2E tests**.

## 🤝 Contribuição
Sinta-se à vontade para contribuir com melhorias ou correções. Para isso:
1. Faça um fork do repositório.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Envie um pull request.

## 📧 Contato
Para dúvidas ou sugestões, entre em contato com o autor do repositório.

---
**Nota:** Este projeto é apenas para fins de avaliação técnica.


