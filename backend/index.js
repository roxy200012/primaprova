"use strict";
exports.__esModule = true;
var fastify_1 = require("fastify");
var fastify_swagger_1 = require("fastify-swagger");
var app = fastify_1["default"]({
    logger: true,
    ignoreTrailingSlash: true
});
app.register(fastify_swagger_1["default"], {
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
app.listen(3000, function (err, address) {
    if (err)
        throw err;
    app.log.info('server listening on' + address);
});
