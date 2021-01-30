require("dotenv").config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const app = express();

app.use(
    cors({
      origin: ["http://localhost:3001","http://localhost:3000"],
      credentials: true,
    })
  );

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// allow access to the API from different domains/origins
app.use(cors({
  // this could be multiple domains/origins, but we will allow just our React app
  origin: [ "http://localhost:3000" ],
  credentials: true
}));
// Routes config
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts')

app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);
app.use('/api', require('./routes/upload'));
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
  
module.exports = app;
