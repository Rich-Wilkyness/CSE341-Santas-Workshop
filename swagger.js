const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Santas-Workshop',
        description: 'Elf User Information',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);