const express = require("express");
const app = express();
const { resolve } = require("path");

app.set("views", resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(resolve(__dirname, "public")));

app.get("/", (req, res) => {
  return res.render("index");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running...");
});
