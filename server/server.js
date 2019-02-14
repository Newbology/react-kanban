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
const saltRounds = 12;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(flash());

app.use(session({
  store: new redis({ url: 'redis://redis-server:6379', logErrors:true}),
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: ENV === 'production'}
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  console.log('serializing');
  return done(null, {
    id: user.id,
    username: user.username
  });
});

passport.deserializeUser((user, done) => {
  console.log('deserializing');
  new User({ id: user.id }).fetch()
  .then(user => {
    user = user.toJSON();
    return done(null, {
      id: user.id,
      username: user.username
    });
  })
  .catch((err) => {
    console.log(err);
    return done(err);
  });
});


passport.use(new LocalStrategy(function(username, password, done) {
  return new User({ username: username })
  .fetch()
  .then ( user => {
    user = user.toJSON();
    console.log(user);
    
    if (user === null) {
      return done(null, false, {message: 'bad username or password'});
    }
    else {
      bcrypt.compare(password, user.password)
      .then((res) => {
        if (res) { return done(null, user); }
        else {
          return done(null, false, {message: 'bad username or password'});
        }
      });
    }
  })
  .catch(err => {
    console.log('error: ', err);
    return done(err);
  });
}));
app.post('/register', (req, res) => {
  bcrypt.genSalt(saltRounds,(err, salt) => {
    if (err) { console.log(err); }
    
    bcrypt.hash(req.body.password, salt, function(err, hash){
      if (err) { console.log(err); }

      return new User({
        username: req.body.username,
        password: hash
      })
      .save()
      .then((user) => {
        console.log(user);
        req.flash('authErr', 'You have successfully created an account!')
        res.redirect('/login');
      })
      .catch((err) => {
        console.log(err);
        return res.send('Error Creating account');
      });
    });
  });
});

app.get('/login', (req, res) => {
  res.render('gallery/login', {message: req.flash('authErr')});
});

app.get('/register', (req, res) => {
  res.render('gallery/register')
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/secret',
  failureRedirect: '/login',
  failureFlash: true
}));

app.get('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});


function isAuthenticated (req, res, next) {
  if(req.isAuthenticated()) { next();}
  else {req.flash('authErr', 'Must be logged in to do that'), res.redirect('/login'); }
}

app.get('/secret', isAuthenticated, (req, res) => {
  console.log('req.user: ', req.user);
  console.log('req.user id', req.user.id);
  console.log('req.username', req.user.username);
  res.redirect('gallery');
});

app.get('/smoke', (req, res) => {
  return res.send('smoke test');
});


app.use('/api', kanban)

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})