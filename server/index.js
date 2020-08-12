var express = require("express");
var app = express();
var app2 = express();
const port = 3000;

app.use(express.static("public"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

// 简单跨域处理
app2.use(
  express.static("public", {
    setHeaders: function (res, path, stat) {
      res.set({
        "Access-Control-Allow-Origin": "http://localhost:3000",
      });
    },
  })
);

// 携带自定义 headers 预检请求处理
app2.options("/p", (req, res) => {
  res.set({
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Request-Method": "POST",
    "Access-Control-Allow-Headers": "SELF_HEADER,Content-Type, ee",
    "Access-Control-Max-Age": 10,
  });
  res.send();
});

app2.post("/p", (req, res) => {
  res.set({
    "Access-Control-Allow-Origin": "http://localhost:3000",
  });
  res.send("......post result");
});

app2.listen(3001);
