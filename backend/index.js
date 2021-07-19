"use strict";
// PER FAR FUNZIONARE, ESEGUIRE QUESTI COMANDI SU UN NUOVO TERMINALE (`CTRL` + `SHIFT` + `ò`) ⬇⬇⬇
exports.__esModule = true;
// npm i fastify
// npm i fastify-swagger
// npm i nodemon
// npm i @types/node
// POI, SEMPRE SU UN NUOVO TERMINALE (`CTRL` + `SHIFT` + `ò`) SCRIVERE : ` nodemon . `
// POI, SEMPRE SU UN NUOVO TERMINALE (`CTRL` + `SHIFT` + `ò`) SCRIVERE : ` tsc -w index.ts `
// ANDATE SUL BROWSER E SCRIVETE SULLA BARRA DEGLI INDIRIZZI  ` http://127.0.0.1:3000/api `  
var fastify_1 = require("fastify");
var swagger = require("fastify-swagger");
var app = fastify_1["default"]({
    logger: true,
    ignoreTrailingSlash: true
});
app.register(swagger["default"], {
    routePrefix: '/api',
    swagger: {
        info: {
            title: 'Esame ITS 2021',
            description: 'Api Esame',
            version: '1.0.0'
        },
        host: '127.0.0.1:3000',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json']
    },
    exposeRoute: true
});
// CHIAMATA GET PER RICEVERE I DATI
app.get("/offerte", function (req, reply) {
    reply
        .code(200) // => IL CODICE CHE VIENE TORNATO
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({ id: 1,
        url: "../../assets/colosseum.010.jpg",
        title: "Immergiti nell'atmosfera romana",
        description: "Immergiti nell'atmosfera romana e visita i nostri monumenti.",
        pass_prenotati: 12,
        pass_liberi: 50
    });
});
// CHIAMATA POST PER INSERIRE I DATI
app.get("/offerte/:id", {
    schema: {
        params: {
            type: "object",
            properties: {
                id: {
                    type: "number"
                }
            }
        }
    }
}, function (req, reply) {
    reply
        .code(200) // => IL CODICE CHE VIENE TORNATO
        .send({ id: 1,
        url: "../../assets/colosseum.010.jpg",
        title: "Immergiti nell'atmosfera romana",
        description: "Immergiti nell'atmosfera romana e visita i nostri monumenti.",
        pass_prenotati: 12,
        pass_liberi: 50
    });
});
app.post("/prenotazione", {
    schema: {
        params: {
            type: "object",
            properties: {
                nome: {
                    type: "string"
                },
                cognome: {
                    type: "string"
                },
                data_nascita: {
                    type: "string"
                },
                luogo_nascita: {
                    type: "string"
                },
                tipo_pass: {
                    type: "string"
                }
            }
        }
    }
}, function (req, reply) {
    reply
        .code(200) // => IL CODICE CHE VIENE TORNATO
        .send({
        message: "Prenotazione effettuata con successo!"
    });
});
app.listen(3000, function (err) {
    if (err)
        throw err;
});
