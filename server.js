const express = require("express");
const routes = require("./routes");
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3001;
var cors = require("cors");
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
app.use(cors());

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
