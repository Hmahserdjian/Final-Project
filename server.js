const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// for body parser for Ajax requests
app.use(body.Parser.urlcoded({extend: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// app routes
app.use(routes);

// setsmup promises with mongoose
mongoose.Promise = global.Promise;

//connect to mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/researcher",
  {
    useMongoClient: true
  }
);
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
