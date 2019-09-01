'use strict';

const superagent = require('superagent');
require('superagent-retry')(superagent);
const request = require('supertest');
const productsDataQuery = require('../../testdata/productsDataQuery.json');
const config = require('../../configuration/config.json');

describe('/products query parameter tests', () => {

    test('Validate GET :: /products :: Limit Query', async() => {

        for (let count = 0; count < 5; count++) {

            const response = await request(config.baseUrl)
                .get('products?$limit=' + count)
                .set('Content-Type', 'application/json')
                .retry(3);
            await expect(response.statusCode).toBe(200);
            await expect(response.body.data.length).toBe(count);

        }
        
    });

    test('Validate GET :: /products :: Skip Query', async() => {

        let productIdArray = [43900, 48530, 127687];

        for (let count = 0; count < productIdArray.length; count++) {

            const response = await request(config.baseUrl)
                .get('products?$skip=' + productIdArray[count])
                .set('Content-Type', 'application/json')
                .retry(3);
            await expect(response.statusCode).toBe(200);
            await expect(response.body.skip).toBe(productIdArray[count]);

        }
    });

    test('Validate GET :: /products :: Descending Sort Query', async() => {

        let priceOfLastProduct = 1000000000;

        const response = await request(config.baseUrl)
            .get('products?$sort[price]=-1')
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        await data.forEach(element => {
            expect(element.price).toBeLessThanOrEqual(priceOfLastProduct);
            priceOfLastProduct = element.price;

        });

    });

    test('Validate GET :: /products :: Ascending Sort Query', async() => {

        let priceOfLastProduct = 0;

        const response = await request(config.baseUrl)
            .get('products?$sort[price]=1')
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        await data.forEach(element => {
            expect(element.price).toBeGreaterThanOrEqual(priceOfLastProduct);
            priceOfLastProduct = element.price;

        });

    });

    test('Validate GET :: /products :: Selected Data Query', async() => {

        const response = await request(config.baseUrl)
            .get('products?$select[]=name&$select[]=price')
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        await data.forEach(element => {
            expect(Object.keys(element).sort())
                .toEqual(['name', 'price'].sort());

        })

    });

    test('Validate GET :: /products :: Type Query', async() => {

        const response = await request(config.baseUrl)
            .get('products?type=' + productsDataQuery.type)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            expect(element.type).toBe(productsDataQuery.type);
        });

    });

    test('Validate GET :: /products :: Less Than Or Equal To Query', async() => {

        const response = await request(config.baseUrl)
            .get('products?price[$lte]=' + productsDataQuery.price)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            expect(element.price).toBeLessThanOrEqual(productsDataQuery.price);
        });

    });

    test('Validate GET :: /products :: Less Than To Query', async() => {

        const response = await request(config.baseUrl)
            .get('products?price[$lt]=' + productsDataQuery.price)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            expect(element.price).toBeLessThan(productsDataQuery.price);
        });

    });

    test('Validate GET :: /products :: Greater Than Or Equal To Query', async() => {

        const response = await request(config.baseUrl)
            .get('products?price[$gte]=' + productsDataQuery.price)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            expect(element.price).toBeGreaterThanOrEqual(productsDataQuery.price);
        });

    });

    test('Validate GET :: /products :: Greater Than To Query', async() => {

        const response = await request(config.baseUrl)
            .get('products?price[$gt]=' + productsDataQuery.price)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            expect(element.price).toBeGreaterThan(productsDataQuery.price);
        });

    });

    test('Validate GET :: /products :: Name And Less Than to Query', async() => {

        const response = await request(config.baseUrl)
            .get('products?name[$like]=*' + productsDataQuery.name + '*&price[$lt]=' + productsDataQuery.otherprice)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            expect(element.price).toBeLessThan(productsDataQuery.otherprice);
            expect((element.name).toLowerCase()).toMatch(productsDataQuery.name);
        });

    });

    test('Validate GET :: /products :: Name And Greater Than To Query', async() => {

        const response = await request(config.baseUrl)
            .get('products?name[$like]=*' + productsDataQuery.name + '*&price[$gt]=' + productsDataQuery.otherprice)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            expect(element.price).toBeGreaterThan(productsDataQuery.otherprice);
            expect((element.name).toLowerCase()).toMatch(productsDataQuery.name);
        });

    });

    test('Validate GET :: /products :: Shipping Price Less Than To Query', async() => {

        const response = await request(config.baseUrl)
            .get('products?shipping[$lt]=' + productsDataQuery.shippingprice)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            expect(element.shipping).toBeLessThan(productsDataQuery.shippingprice);
        });

    });

    test('Validate GET :: /products :: Shipping Price Greater Than To Query', async() => {

        const response = await request(config.baseUrl)
            .get('products?shipping[$gt]=' + productsDataQuery.shippingprice)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            expect(element.shipping).toBeGreaterThan(productsDataQuery.shippingprice);
        });

    });

    test('Validate GET :: /products :: Multiple Price Query', async() => {
        
        const response = await request(config.baseUrl)
            .get('products?type[$in][]=' + productsDataQuery.price + '&type[$in][]=' + productsDataQuery.otherprice)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            expect(element.price).not.toBe(productsDataQuery.otherprice);
            expect(element.price).not.toBe(productsDataQuery.price);
        });

    });

    test('Validate GET :: /products :: Exclude Multiple Types Query', async() => {

        const response = await request(config.baseUrl)
            .get('products?type[$nin][]=' + productsDataQuery.type + '&type[$nin][]=' + productsDataQuery.othertype)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            expect(element.type).not.toBe(productsDataQuery.type);
            expect(element.type).not.toBe(productsDataQuery.othertype);
        });

    });

    test('Validate GET :: /products :: Category Name Query', async() => {

        const response = await request(config.baseUrl)
            .get('products?category.name=' + productsDataQuery.category)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            let categories = [];
            const categoryData = element.categories;
            categoryData.forEach(element1 => {
                categories.push(element1.name);
            });
            expect(categories).toEqual(expect.arrayContaining([productsDataQuery.category]));
        });

    });

    test('Validate GET :: /products :: Category Id Query', async() => {

        const response = await request(config.baseUrl)
            .get('products?category.id=' + productsDataQuery.category_id)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            let categoryIds = [];
            const categoryData = element.categories;
            categoryData.forEach(element1 => {
                categoryIds.push(element1.id);
            });
            expect(categoryIds).toEqual(expect.arrayContaining([productsDataQuery.category_id]));
        });
        
    });

});