const express = require("express");

const app = express();

// BODY PARSER
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require("./routes");

app.use(routes);

app.listen(5000, () => {
  console.log("server running on port http://localhost:5000");
});
