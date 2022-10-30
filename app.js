const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Hello world app listening on port 3000!`)
);
