const request = require('supertest');
const server = require('../server.js');
describe('GET request to /', () => {
    it('should return message indicating that the server is online', async () => {
            const result = await request(server).get('/');
            expect(result.body.message).toBe('server online!')
    })
})

const userRegInput = [
    { username: "asdf1", email: "asdf1@gmail.com", password: "asdf1" },
    { username: "asdf2", email: "asdf2@gmail.com", password: "asdf2" },
    { username: "asdf3", email: "asdf3@gmail.com", password: "asdf3" },
]

describe('POST request to /api/users/register', () => {
    describe('given incomplete input', () => {
        it('should respond with an error if no username is provided', async () => {
            const result = await request(server).post('/api/users/register').send({ ...userRegInput[0], username: "" });
            expect(result.body.error).toBe('you must provide a username');
            expect(result.status).toBe(400);
        });
        it('should respond with an error if no email is provided', async () => {
            const result = await request(server).post('/api/users/register').send({ ...userRegInput[0], email: "" });
            expect(result.body.error).toBe('you must provide an email address');
            expect(result.status).toBe(400);
        });
        it('should respond with an error if no password is provided', async () => {
            const result = await request(server).post('/api/users/register').send({ ...userRegInput[0], password: "" });
            expect(result.body.error).toBe('you must provide a password');
            expect(result.status).toBe(400);
        });
    });
    describe('given invalid input', () => {
        it('should respond with an error if the provided username is too short', async () => {
            const result = await request(server).post('/api/users/register').send({ ...userRegInput[0], username: "as" });
            expect(result.body.error).toContain("is too short");
            expect(result.status).toBe(400);
        });
        it('should respond with an error if an invalid email is provided', async () => {
            const result = await request(server).post('/api/users/register').send({ ...userRegInput[0], email: "asddf@9.3" });
            expect(result.body.error).toBe('you must provide a valid email address');
            expect(result.status).toBe(400);
        });
    });
    describe('given valid input', () => {
        it('should respond with a message confirming successful registration', async () => {
            const result = await request(server).post('/api/users/register').send(userRegInput[0]);
            expect(result.body.message).toContain('registration successful');
            expect(result.status).toBe(201);
        })
    })
})