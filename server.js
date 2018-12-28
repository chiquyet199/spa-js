const express = require("express");
const app = express();

app.use("/js", express.static(`${__dirname}/js`));
app.use("/pages", express.static(`${__dirname}/pages`));
app.use("/assets", express.static(`${__dirname}/assets`));
app.use("/components", express.static(`${__dirname}/components`));

app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: `${__dirname}` });
});

app.listen(3000, () => {
  console.log("your server is running on port 3000");
});
