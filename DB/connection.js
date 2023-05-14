// const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://127.0.0.1:27017/studentdex")
//   .then((e) => {
//     console.log("connection successfully");
//   })
//   .catch((e) => {
//     console.log("failed");
//     console.log(e);
//   });
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb://localhost:27017/warizx"
  )
  .then(() => {
    console.log("connection successfully");
  })
  .catch((e) => {
    console.log("connection failed")
  });
