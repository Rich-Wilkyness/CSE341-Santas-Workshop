// index model
const dbConfig = require('../config/db.config.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.children = require('./children.js')(mongoose);
db.coal = require('./coal.js')(mongoose);
db.toys = require('./toy.js')(mongoose);
db.user = require('./user.js')(mongoose);


module.exports = db;