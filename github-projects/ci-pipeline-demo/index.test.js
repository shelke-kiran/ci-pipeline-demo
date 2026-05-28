const request = require('supertest');
const app = require('./index');

describe('API Endpoints Verification', () => {
  
  test('GET / should return 200 and success status JSON', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('success');
    expect(res.body).toHaveProperty('message');
  });

  test('GET /health should return healthy status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('healthy');
  });

});
