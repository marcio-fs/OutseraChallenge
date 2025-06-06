import http from 'k6/http';
import { check, sleep } from 'k6';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

// Configurações ajustáveis por variáveis de ambiente
const config = {
    baseUrl: 'https://test-api.k6.io',
    endpoint: '/public/crocodiles/',
    defaultVUs: 500,
    stepSize: 100,
    stepDuration: '1m',
    successStatusCode: 200,
    performanceThresholdMs: 500,
    errorRateThreshold: 0.01,
    sleepDuration: 1
};

// Processamento das variáveis de ambiente
const testConfig = {
    totalVUs: __ENV.VUS ? parseInt(__ENV.VUS) : config.defaultVUs,
    stepSize: __ENV.STEP ? parseInt(__ENV.STEP) : config.stepSize,
    stepDuration: __ENV.TIME ? __ENV.TIME : config.stepDuration
};

// Validação das configurações
function validateConfig() {
    if (testConfig.totalVUs <= 0) throw new Error('Número de VUs deve ser positivo');
    if (testConfig.stepSize <= 0) throw new Error('Tamanho do passo deve ser positivo');
    if (testConfig.totalVUs % testConfig.stepSize !== 0) {
        console.warn(`O número total de VUs (${testConfig.totalVUs}) não é múltiplo do tamanho do passo (${testConfig.stepSize})`);
    }
}

// Construtor de estágios de teste
function buildStages() {
    const stages = [];
    for (let i = testConfig.stepSize; i <= testConfig.totalVUs; i += testConfig.stepSize) {
        stages.push({
            duration: testConfig.stepDuration,
            target: i
        });
    }
    return stages;
}

// Configurações do teste
export const options = {
    stages: buildStages(),
    thresholds: {
        http_req_duration: [`p(95)<${config.performanceThresholdMs}`],
        http_req_failed: [`rate<${config.errorRateThreshold}`],
    },
    teardownTimeout: '30s'
};

// Função de inicialização (executada uma vez antes do teste)
export function setup() {
    validateConfig();
    console.log(`Iniciando teste com configuração: 
        VUs totais: ${testConfig.totalVUs}
        Tamanho do passo: ${testConfig.stepSize}
        Duração por passo: ${testConfig.stepDuration}`);
}

// Função principal de teste
export default function () {
    const url = `${config.baseUrl}${config.endpoint}`;
    const response = http.get(url);
    
    check(response, {
        [`status é ${config.successStatusCode}`]: (r) => r.status === config.successStatusCode,
        [`resposta em < ${config.performanceThresholdMs}ms`]: (r) => r.timings.duration < config.performanceThresholdMs,
    });
    
    sleep(config.sleepDuration);
}

// Geração de relatório personalizado
export function handleSummary(data) {
    return {
        'stdout': textSummary(data, { indent: ' ', enableColors: true }),
        'summary.json': JSON.stringify(data)
    };
}