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

    test('Data response test with middlewar function', async () => {
        const response = await request.get('/test');
        expect(response.status).toBe(200);
        expect(typeof response.body).toBe('object')
    })



})