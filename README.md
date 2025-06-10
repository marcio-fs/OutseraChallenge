# Outsera Challenge

## Sobre
Este repositório contém os desafios técnicos propostos pela Outsera, com o objetivo de avaliar habilidades em diferentes áreas de testes, incluindo performance e automação de APIs.

## Estrutura do Projeto
O repositório está organizado em três pastas principais, cada uma com seu próprio README detalhando os objetivos e instruções:

### 1️⃣ **Testes de Performance**
- **Pasta**: `K6`
- **Objetivo**: Avaliar a experiência com testes de performance e ferramentas de carga, como o **K6**.
## 📂 Estrutura do Projeto

- **`scripts/load-test.js`**: Script principal do teste de carga.
- **`docker-compose.yml`**: Configuração para subir o Grafana e o InfluxDB.
- **`results/`**: Pasta opcional para armazenar JSONs ou exportações de resultados.

---

## 🛠️ Pré-requisitos

1. **Docker** e **Docker Compose** instalados.
2. **K6** instalado na máquina:
   ```bash
   brew install k6 # Para macOS
   ```

---

## ▶️ Como Rodar o Teste

### 1️⃣ Subir o Ambiente (Grafana + InfluxDB)

Execute o comando abaixo para iniciar os serviços:
```bash
cd k6

docker-compose up -d
```

### 2️⃣ Executar o Teste de Carga

Execute o script de teste com o K6:
```bash
k6 run scripts/load-test.js
```
### 2️⃣ **Testes Automatizados de API**
- **Pasta**: `IntegratedTest`
- **Objetivo**: Avaliar a capacidade de automatizar testes de API e interpretar os resultados.
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


### 3️⃣ **Testes Automatizados E2E**
- **Pasta**: `FunctionalTest`
- **Objetivo**: Avaliar a experiência em automação de testes de ponta a ponta utilizando **Cucumber**, garantindo que os testes E2E sigam boas práticas e estejam bem documentados.
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

## Como Navegar
Cada pasta possui um README específico com informações detalhadas sobre o desafio correspondente. Certifique-se de acessar o README dentro de cada pasta para instruções completas.

## Tecnologias Utilizadas
- **K6**: Para testes de performance e carga.
- **JavaScript**: Linguagem principal para automação de testes.
- **Cucumber**: Para escrita de cenários de teste no formato Gherkin.
- **Cypress**: Framework de testes E2E.
- **Ferramentas de API**: Utilizadas para validação e automação de endpoints.
---
**Nota:** Este projeto é apenas para fins de avaliação técnica.
