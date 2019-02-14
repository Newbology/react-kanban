const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcryptjs');
const redis = require('connect-redis')(session);
const flash = require('connect-flash');
const kanban = require('./routes/kanban')

const PORT = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV || 'development';
const SESSION_SECRET = process.env.SESSION_SECRET || 'keyboard cat';
const REDIS = process.env.REDIS_HOST_PORT;
const REDIS_URL = process.env.REDIS_URL;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(flash());

app.use(session({
  store: new redis({ url: `${REDIS_URL}:${REDIS}`, logErrors:true}),
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: ENV === 'production'}
}));

app.use(passport.initialize());
app.use(passport.session());


app.use('/api', kanban)

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})