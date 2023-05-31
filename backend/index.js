const express = require("express");
const main = require("./db");
main();
var cors = require('cors')
var app = express()
 
app.use(cors())
 
const port = 5000;

app.use(express.json());

app.use("/api/user", require("./routes/user"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
