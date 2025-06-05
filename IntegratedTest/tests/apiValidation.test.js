const { test, expect } = require('@playwright/test');

test.describe('Automation Exercise API Validation', () => {
  const baseUrl = 'https://automationexercise.com/api';

  test('Validate API 1: Get All Products List - Status Code 200', async ({ request }) => {
    const response = await request.get(`${baseUrl}/productsList`);
    expect(response.status()).toBe(200); // Validate status code
  });

  test('Validate API 12: DELETE METHOD To Delete User Account - Status Code 200', async ({ request }) => {
    const response = await request.delete(`${baseUrl}/deleteAccount`, {
      data: {
        email: 'testuser@example.com', // Replace with a valid email
        password: 'password123',      // Replace with a valid password
      },
    });
    expect(response.status()).toBe(200); // Validate status code
  });
});