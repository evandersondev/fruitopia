const express = require("express");
const app = express();
const { resolve } = require("path");

app.set("views", resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(resolve(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3001, () => {
  console.log("Server is running...");
});
