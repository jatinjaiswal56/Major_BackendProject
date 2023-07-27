const express = require("express");
const app = express();
const port = 8000;
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);
app.use(express.static("assests"));
app.use("/", require("./routes/index"));
app.set("layout extractStyles", true)
app.set("layout extractScripts", true)
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, (err) => {
  if (err) {
    console.log(`Error in running the server :${err}`);
  }
  console.log(`server is running on port`);
});
