'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app)

describe('sss', () => {


    test('Home bage test', async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toBe('hello');
    })

    test('Data response test', async () => {
        const response = await request.get('/data');
        expect(response.status).toBe(200);
        expect(typeof response.body).toBe('object')
    })

    test('Page not found test', async () => {
        const response = await request.get('/sss');
        expect(response.status).toBe(404);
    })

    test('internal server error test', async () => {
        const response = await request.get('/error500');
        expect(response.status).toBe(500);
    })


})