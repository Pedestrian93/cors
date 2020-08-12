const simpleGet = document.getElementById("get");
const simplePost = document.getElementById("post");
const preflightPost = document.getElementById("prePost");

simpleGet.addEventListener("click", function () {
  axios
    .get("http://localhost:3001/user.json")
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

simplePost.addEventListener("click", function () {
  axios
    .post(
      "http://localhost:3001/p",
      { name: "san" },
      {
        headers: {
          "Content-Type": "  text/plain",
        },
      }
    )
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

preflightPost.addEventListener("click", function () {
  axios
    .post(
      "http://localhost:3001/p",
      {
        name: "san",
      },
      {
        headers: { SELF_HEADER: "xxx", EE: "jj" },
      }
    )
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});
