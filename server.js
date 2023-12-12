const dotenv = require('dotenv').config();

const express = require('express');
const cors = require('cors');
const session = require('express-session');
const app = express();
const passport = require('passport');
const githubPassportStrategy = require("passport-github2").Strategy;


const swaggerAutogen = require('swagger-autogen')();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app
  .use(express.urlencoded({ extended: true }))
  .use(express.json());

  
  app.use(bodyParser.json()); 
  app.use(session({
    secret: process.env.PASSPORT_SECRET,
    resave: false,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use((req, res, next)=>{
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Headers", 
      "Origin, X-Requested-With, Content-Type, Accept, Z-Key  ");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
      next();
  });
  app.use(cors({methods:['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']}));
  app.use(cors({origin: '*'}));

app
  .use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTIONS']
}))

app.use('/', require("./routes/index"));

passport.use(new githubPassportStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL

},
function(accessToken, refreshToken, profile, done){
    return done(null, profile)
}
));

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get('/', (req,res) => {res.send(req.session.user !== undefined ? `Logged in as ${req.session.user.displayName}` : "Logged Out")});

app.get('/github/callback', passport.authenticate('github', {failureRedirect:'/api-docs', session: false}),
  (req, res) => {
    req.session.user = req.user;
    res.redirect('/');
  });

const db = require('./models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// jest setup --> npm install --save-dev jest --> sytax for test files (og: filename.js, test: filename.test.js) --> require og file as a const, use exect(const(params).toBe(expectedValue)) --> update package.json scripts, "test": "jest"; --> run test: jest filename.test.js --notify --config=config.json
// if using certain libraries, must install the dependencies for jest
// put all test files in a folder named __tests__
// create file named filterByTerm.spec.js
/*
function filterByTerm(inputArr, searchTerm) {
  return inputArr.filter(function(arrayElement) {
    return arrayElement.url.match(searchTerm);
  });
}

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);

  });
});
*/ 
// npm run test 

// jest for mongodb = https://jestjs.io/docs/mongodb
