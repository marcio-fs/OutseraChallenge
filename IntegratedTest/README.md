# Testes Automatizados com Playwright

Este projeto utiliza o framework [Playwright](https://playwright.dev/) para automação de testes end-to-end, garantindo a qualidade de aplicações web.

## 📂 Estrutura do Projeto

```
/tests                # Arquivos de teste
/playwright-report               # Relatórios gerados após a execução
/playwright.config.ts # Configuração do Playwright
```

## 🚀 Tecnologias Utilizadas

- **Playwright**: Framework de testes E2E.
- **TypeScript**: Linguagem para tipagem estática.
- **Node.js**: Ambiente de execução JavaScript.

## ✅ Pré-requisitos

- Node.js (v16 ou superior)
- Gerenciador de pacotes `npm` ou `yarn`

## ⚙️ Instalação

1. Clone o repositório:
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd IntegratedTest
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

## 🧪 Execução dos Testes

### 🖥️ Via Interface Gráfica
1. Execute:
   ```bash
   npx playwright test --ui
   ```

### 🏃 Em Modo Headless
1. Execute:
   ```bash
   npx playwright test
   ```

2. Relatórios serão gerados na pasta `/report`.

---
**Nota:** Este projeto basico é apenas para fins de avaliação técnica.