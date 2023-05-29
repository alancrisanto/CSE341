const express = require('express');
const app = express();

app.get("/", (req, res)=>{
  res.send("Hello, world! from nodeJs");
});

app.listen(process.env.PORT || 3000);
console.log("listening on port" + (process.env.port || 3000));