const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

// html file path
const staticPath = path.join(__dirname, "../public");

//  buildin midleware
app.use("/", express.static(staticPath));

// home page localhost:3000
app.get("/about", (req, res) => {
  res.send("Hello Express");
});

app.get("/contact", (req, res) => {
  res.send();
});

app.listen(port, () => {
  console.log(`---server is working on localhost:${port}---`);
});
