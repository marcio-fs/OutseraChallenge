const { test, expect } = require('@playwright/test');

test.describe('Automation Exercise API Validation', () => {
  const baseUrl = 'https://automationexercise.com/api';

  test('Validate API 1: Get All Products List - Status Code 200', async ({ request }) => {
    const response = await request.get(`${baseUrl}/productsList`);
    expect(response.status()).toBe(200);
   //expect(response.headers()['content-type']).toContain('application/json'); // Validar o tipo de conteúdo JSON no caso se for uma API REST.
    expect(response.headers()['content-type']).toContain('text/html');
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('products');
    expect(Array.isArray(responseBody.products)).toBe(true);
  });

  test('Validate API 12: DELETE METHOD To Delete User Account - Status Code 200', async ({ request }) => {
    const response = await request.delete(`${baseUrl}/deleteAccount`, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email: 'testuser@example.com',
        password: 'password123',
      },
    });
    expect(response.status()).toBe(200);
  });

  test('Negative: Invalid Endpoint - Status Code 404', async ({ request }) => {
    const response = await request.get(`${baseUrl}/invalidEndpoint`);
    expect(response.status()).toBe(404);
    expect(response.headers()['content-type']).toContain('text/html');
  });



});