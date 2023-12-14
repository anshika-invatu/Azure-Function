
// const app = require('../src/functions/httpTrigger1');

// const request = require('supertest');
// const { expect } = require('chai');


// describe('HTTP Example Function', () => {
//     it('should respond with hello message on GET', async () => {
//         const response = await request(app).get('/api/httpTrigger1').query({ name: 'world' });

//         expect(response.status).to.equal(200);
//         expect(response.body).to.deep.equal({ body: 'Hello, world!' }); 
//     });

//     it('should handle POST request', async () => {
//         const response = await request(app).post('/api/httpTrigger1').send({ name: 'world' });

//         expect(response.status).to.equal(200);
//         expect(response.body).to.deep.equal({ body: 'Hello, world!' }); 
//     });

// });



// Run: npm test
const request = require('request-promise');
const { expect } = require('chai');

describe('HTTP Example Function',async () => {
    it.only('should respond with hello test on GET', async () => {
        const result = await request.get('http://localhost:7071/api/httpTrigger1?name=test', {
            json: true,
            headers: {
                'x-functions-key': process.env.X_FUNCTIONS_KEY
            }
        });
        expect(result).to.deep.equal('Hello, test!' ); 
    });

    it.only('should respond with hello world on POST', async () => {
        const result = await request.post('http://localhost:7071/api/httpTrigger1?name=world', {
            json: true,
            headers: {
                'x-functions-key': process.env.X_FUNCTIONS_KEY
            }
        });
        expect(result).to.deep.equal('Hello, world!' ); 
    });

});









