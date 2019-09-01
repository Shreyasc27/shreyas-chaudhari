# Best Buy Rest Api Test Automation

## Different aspects to be considered in testing Api
**Functional verification** - To verify the working of the api. Testing aspect will cover verifying -
 * Request schema
 * Response schema
 * Response codes
 * Response messages
 * Response body
 * Error handling

**Business use case validation** - To verify if the api exhibits the features as per the business use case and thereby the requirements.

**Performance / Load / Scalability** - To verify how the apis will respond to the large number of requests. 

**Security** - To verify if the api is secured by taking into consideration the authentication and the authorization aspect.

**Usability / Documentation** - To verify if the api documentation is easy to read and easy to use for the end user.
___

## Test strategy for different Rest api verbs
**GET**
 * Validate if the valid request returns status code = 200
 * Validate if the valid request returns message = OK
 * Validate if the valid request returns valid response
 * Validate if the invalid request returns status code = 404 (https://en.wikipedia.org/wiki/HTTP_404)

**POST**
 * Validate if the valid request returns status code = 201
 * Validate if the valid request returns message = Created
 * Validate if the valid request results in data saved correctly
 * Validate if the invalid request body returns status code = 400 (https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_errors)

**PATCH**
 * Validate if the valid request returns status code = 200
 * Validate if the valid request returns message = OK
 * Validate if the valid request with no data should not update any entry
 * Validate if the invalid request with incorrect id returns status code = 404 (https://en.wikipedia.org/wiki/HTTP_404)

**DELETE**
 * Validate if the valid request returns status code = 200
 * Validate if the valid request returns message = OK
 * Validate if the invalid request with incorrect id returns status code = 404 (https://en.wikipedia.org/wiki/HTTP_404)
___

## Five endpoints for Best Buy Api Playground
1. **Products** - Supports `GET` / `POST` / `DELETE` / `PATCH`
2. **Stores** - Supports `GET` / `POST` / `DELETE` / `PATCH`
3. **Services** - Supports `GET` / `POST` / `DELETE` / `PATCH`
4. **Categories** - Supports `GET` / `POST` / `DELETE` / `PATCH`
5. **Utilities** - Supports `GET`
___

#### As listed above, same type of tests can be written for all the 5 endpoints.
___

## Technology stack
* [Supertest](https://github.com/visionmedia/supertest)
* [Superagent retry](https://github.com/segmentio/superagent-retry)
* [Superagent](https://github.com/visionmedia/superagent)
* [Jest](https://github.com/facebook/jest)
* [Jest Html Reporter](https://github.com/Hargne/jest-html-reporter)
___

## Prerequisites
Best Buy Api playground should be running at http://localhost:3030
___

## How to run the tests?
```bash
git clone https://github.com/Shreyasc27/shreyas-chaudhari.git
cd BestBuyApiTests
npm install
npm run test

```
___

## Where to view the reports?
```bash
cd reports
```
View the file Best-Buy-Api-Test-Report.html
___




