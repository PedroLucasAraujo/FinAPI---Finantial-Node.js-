const express = require("express");

const app = express();

app.get("/ignite", (request, response) => {
  return response.json({
    message: "Hello World Ignite - Fundalmentals of NodeJs",
  });
});

app.listen(3333);
