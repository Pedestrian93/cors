var express = require("express");
var app = express();
var app2 = express();
const port = 3000;

app.use(express.static("public"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

// app2.use(
//   express.static("public", {
//     setHeaders: function (res, path, stat) {
//       res.set({
//         "x-timestamp": Date.now(),
//         "Access-Control-Allow-Origin": "http://localhost:3000",
//         "Access-Control-Allow-Methods": "POST,PUT",
//       });
//     },
//   })
// );

app2.post("/p", (req, res) => {
  console.log(req, res);
  res.set({
    // "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    // "Access-Control-Request-Method": "POST",
    // "Access-Control-Allow-Headers": "SELF_HEADER,Content-Type",
  });
  res.send("......post result");
});
app2.options("/p", (req, res) => {
  console.log(req, res);
  res.set({
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Request-Method": "POST",
    "Access-Control-Allow-Headers": "SELF_HEADER,Content-Type",
  });
  res.send("......post result");
});

app2.listen(3001);
