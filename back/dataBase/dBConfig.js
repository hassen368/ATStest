const mongoose = require("mongoose");
const axios = require('axios');
const product = require("../model/products.model")
//var router = express.Router();

/*
axios.get('https://tech.dev.ats-digital.com/api/products?size=100').then(resp => {

    console.log(resp.data);
});*/



const db = "mongodb://localhost:27017/testATS";














mongoose
  .connect(db)
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

/*

async function makeGetRequest() {

  let res = await axios.get('https://tech.dev.ats-digital.com/api/products?size=100');

  let data = res.data;
  console.log(data);
}
makeGetRequest()*/


mongoose.Promise = global.Promise; // pour bloquer le thread (le nodejs est par defaut non bloquant)
mongoose.connection.on(
  "error",
  console.error.bind(console, "Mongodb connection error")
);
module.exports = mongoose;