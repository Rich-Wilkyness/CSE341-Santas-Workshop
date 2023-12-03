const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Santas-Workshop',
        description: 'Elf User Information',
    },
    host: 'https://cse341-santas-workshop.onrender.com',
    schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);