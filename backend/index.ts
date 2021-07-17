import fastify from "fastify";
import swagger from 'fastify-swagger'
const app = fastify({
    logger: true,
    ignoreTrailingSlash: true
});
app.register(swagger, {
    routePrefix: '/documentation',
    swagger: {
        info: {
            title: 'prima prova',
            description: 'test fastify api',
            version: '0.1.0'
        },
        host: 'localhost:3000',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json']
    },
    exposeRoute: true
});
app.listen(3000,(err, address) =>{
    if (err) throw err
    app.log.info('server listening on' + address)
});