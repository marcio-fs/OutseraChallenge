

# 🚀 Load Testing com K6 + Grafana

Este projeto realiza testes de performance simulando **500 usuários simultâneos por 5 minutos**, com os dados enviados para o **InfluxDB** e visualizados no **Grafana**.



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

#### Parâmetros Opcionais:
- **VUS**: Quantidade máxima de usuários simultâneos.
- **STEP**: Quantidade de usuários por etapa.
- **TIME**: Tempo de duração por etapa (em milissegundos).

Exemplo:
```bash
k6 run scripts/load-test.js --env VUS=500 --env STEP=100 --env TIME=60000
```

---

## 📊 Acessar o Dashboard do Grafana

1. Abra o navegador e acesse:
   ```
   http://localhost:3000
   ```
2. **Credenciais padrão**:
   - Usuário: `admin`
   - Senha: `admin`

---

## 🛠️ Configurar o Dashboard no Grafana

Caso o relatório não apareça automaticamente, siga os passos abaixo:

### 1️⃣ Importar o Dashboard
1. Clique em **Dashboards** > **Import**.
2. Digite o **Dashboard ID**: `2587` e clique em **Load**.
3. Selecione o **Data Source** como `influxdb`.

### 2️⃣ Configurar o Data Source (se necessário)
1. Vá para **Configuration** > **Data Sources** > **Add Data Source**.
2. Escolha `InfluxDB`.
3. Configure os campos:
   - **URL**: `http://host.docker.internal:8086`
   - **Database**: `k6`
   - **HTTP Method**: `GET`

---

## 📈 Exemplos de Métricas Coletadas

- **Taxa de Requisições por Segundo (RPS)**
- **Tempo Médio de Resposta (ms)**
- **Taxa de Erros (%)**
- **Usuários Ativos Simultâneos**

---

## 📝 Notas Adicionais

- Certifique-se de que o Docker está em execução antes de iniciar os testes.
- Para personalizar o teste, edite o arquivo `scripts/load-test.js`.
