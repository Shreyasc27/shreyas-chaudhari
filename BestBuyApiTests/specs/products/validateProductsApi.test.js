'use strict';

const superagent = require('superagent');
require('superagent-retry')(superagent);
const request = require('supertest');
const productsData = require('../../testdata/productsData.json');
const config = require('../../configuration/config.json');

describe('/products tests', () => {

    let postId;
    let postRequest = productsData.postrequest;
    let patchRequest = productsData.postrequest;
    
    test('Validate GET :: /products', async() => {
        
        const response = await request(config.baseUrl).get('products')
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        await expect(Object.keys(response.body))
            .toEqual(expect.arrayContaining(Object.keys(productsData.schema)));
        await expect(response.body.data).toContainEqual(productsData.data);

    });

    test('Validate GET :: /products/{id} :: Valid Product Id', async() => {

        const response = await request(config.baseUrl)
            .get('products/' + productsData.data.id)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        await expect(response.body).toEqual(productsData.data);

    });

    test('Validate GET :: /products/{id} :: Invalid Product Id', async() => {

        const response = await request(config.baseUrl)
            .get('products/' + productsData.invalidid)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(404);
        await expect(response.body).toEqual(productsData.notfound);

    });

    test('Validate POST :: /products :: Product Added', async() => {

        const response = await request(config.baseUrl)
            .post('products')
            .set('Content-Type', 'application/json')
            .send(postRequest)
            .retry(3);
        postId = await response.body.id;
        await expect(response.statusCode).toBe(201);

    });

    test('Validate POST :: /products :: Product Details', async() => {

        const response = await request(config.baseUrl)
            .get('products/' + postId)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        await expect(response.body.name).toBe(postRequest.name)
        await expect(response.body.type).toBe(postRequest.type)
        await expect(response.body.price).toBe(postRequest.price)
        await expect(response.body.shipping).toBe(postRequest.shipping)
        await expect(response.body.upc).toBe(postRequest.upc)
        await expect(response.body.description).toBe(postRequest.description)
        await expect(response.body.manufacturer).toBe(postRequest.manufacturer)
        await expect(response.body.model).toBe(postRequest.model)
        await expect(response.body.url).toBe(postRequest.url)
        await expect(response.body.image).toBe(postRequest.image)

    });

    test('Validate POST :: /products :: Bad Request', async() => {

        const response = await request(config.baseUrl)
            .post('products')
            .set('Content-Type', 'application/json')
            .send(productsData.badrequest)
            .retry(3);
        await expect(response.statusCode).toBe(400);
        await expect(response.body).toEqual(productsData.badresponse);

    });

    test('Validate POST :: /products :: Empty Body', async() => {

        const response = await request(config.baseUrl)
            .post('products')
            .set('Content-Type', 'application/json')
            .send('{}')
            .retry(3);
        await expect(response.statusCode).toBe(400);
        await expect(response.body).toEqual(productsData.emptypostresponse);

    });

    test('Validate PATCH :: /products/{id} :: Valid Product Id', async() => {

        patchRequest.upc = "8108487025";
        const response = await request(config.baseUrl)
            .patch('products/' + postId)
            .set('Content-Type', 'application/json')
            .send(patchRequest)
            .retry(3);
        await expect(response.statusCode).toBe(200);

    });

    test('Validate PATCH :: /products/{id} :: Invalid Product Id', async() => {

        const response = await request(config.baseUrl)
            .patch('products/' + productsData.invalidid)
            .set('Content-Type', 'application/json')
            .send(patchRequest)
            .retry(3);
        await expect(response.statusCode).toBe(404);
        await expect(response.body).toEqual(productsData.notfound);

    });

    test('Validate PATCH :: /products/{id} :: Empty Body', async() => {

        const response = await request(config.baseUrl)
            .patch('products/' + postId)
            .set('Content-Type', 'application/json')
            .send('{}')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        await expect(response.body.name).toBe(patchRequest.name)
        await expect(response.body.type).toBe(patchRequest.type)
        await expect(response.body.price).toBe(patchRequest.price)
        await expect(response.body.shipping).toBe(patchRequest.shipping)
        await expect(response.body.upc).toBe(patchRequest.upc)
        await expect(response.body.description).toBe(patchRequest.description)
        await expect(response.body.manufacturer).toBe(patchRequest.manufacturer)
        await expect(response.body.model).toBe(patchRequest.model)
        await expect(response.body.url).toBe(patchRequest.url)
        await expect(response.body.image).toBe(patchRequest.image)

    });

    test('Validate DELETE :: /products/{id} :: Valid Product Id', async() => {

        const response = await request(config.baseUrl)
            .delete('products/' + postId)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);

    });

    test('Validate DELETE :: /products/{id} :: Invalid Product Id', async() => {

        const response = await request(config.baseUrl)
            .get('products/' + postId)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(404);
        
    });

});