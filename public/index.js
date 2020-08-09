const b = document.getElementById("query");

b.addEventListener("click", function () {
  console.log("发送请求。。。");
  axios
    .get("/user.json")
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  axios
    // .post("http://localhost:3001/user.json")
    .post("http://localhost:3001/p", {
      // headers: { SELF_HEADER: "xxx" },
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});
