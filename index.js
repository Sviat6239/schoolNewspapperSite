import fastify from "fastify";

const fastify = Fastify({
    logger: true
})

fastify.get('/', async (request, reply) => {
    return ('API working');
})

fastify.get('/about', async (request, reply) => {
    return ('about page');
})

fastify.get('/home', async (request, reply) => {
    return ('home page');
})

fastify.get('/rules', async (request, reply) => {
    return ('There are our rules');
})