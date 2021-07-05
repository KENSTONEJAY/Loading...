const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3001;
var cors = require("cors");

app.use(cors());

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true
  
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

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ticket_scalper", {
  useNewUrlParser: true,
  useFindAndModify: false
});
app.listen(PORT, () => console.log('Now listening'));
