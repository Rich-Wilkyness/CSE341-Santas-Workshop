const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const passport = require('passport');
const session = require('express-session');
const githubPassportStrategy = require("passport-github2").Strategy;
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const database = require("./database/mongoose");


app.use('/', require("./routes/index"));