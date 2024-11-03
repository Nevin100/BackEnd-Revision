const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./Routes");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/data/v1", router);

app.get("/data/v1/userdata", (req, res) => {
  res.json({
    name: "Nevin",
    email: "nevin123456789@gmail.com",
    password: "NewPassword",
  });
});

app.listen(3000, () => {
  console.log("Server is running on 3000");
});
