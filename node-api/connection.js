const mongoose = require("mongoose");

const connect = mongoose.connect(
  "mongodb+srv://admin:6ex0Qfra2Cy39POp@cluster0.cph0pon.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);

module.exports = connect;


