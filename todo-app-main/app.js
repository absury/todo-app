const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Sync the database
db.sequelize.sync().then(() => {
  console.log("Database synced");
});

// Routes
require("./routes/todo.routes.js")(app);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
