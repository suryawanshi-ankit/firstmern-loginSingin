const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.set("strictQuery", false);
mongoose.connect(DB)
  .then(() => console.log("connected to monodb"))
  .catch(() => console.log("Error in connecting to mongodb"));
  