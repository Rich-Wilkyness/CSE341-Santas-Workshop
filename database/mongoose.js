const dotenv = require("dotenv");
dotenv.config();
url = process.env.MONGODB_URL;


db = {};
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

db.mongoose = mongoose;
db.url = url;

module.exports = db;