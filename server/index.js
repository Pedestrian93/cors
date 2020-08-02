var express = require("express");
var app = express();
var app2 = express();
const port = 3000;

app.use(express.static("public"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

app2.use(
  express.static("public", {
    setHeaders: function (res, path, stat) {
      res.set("x-timestamp", Date.now());
    },
  })
);

app2.listen(3001);
