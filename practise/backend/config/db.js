const mongoose = require("mongoose");

const dbConnect = async (URL) => {
  try {
    await mongoose.connect(URL);
    console.log(" Database connected");
  } catch (error) {
    console.log(" Database not Connected", error);
  }
};

module.exports = dbConnect;
