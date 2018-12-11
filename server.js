const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 5000
const app = express();

app.use("/js", express.static(`${__dirname}/src/js`));

app.use("/pages", express.static(`${__dirname}/src/pages`));

app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: `${__dirname}/src` });
});

app.listen(PORT, function() {
  console.log(`your server is running on localhost:${PORT}`)
});
