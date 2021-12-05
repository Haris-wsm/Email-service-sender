const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');

const passport = require('passport');

require('./models/user');
require('./models/survey');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(express.json());
app.use(
  cookieSession({
    maxAge: 60 * 60 * 1000,
    keys: [keys.cookieSessionKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  //Express will serve up production assets
  // like or main.js file, or main.css file.

  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it dosen't recognize route.

  const path = require('path');

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
