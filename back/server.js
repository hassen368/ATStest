const express = require("express");

const db = require("./dataBase/dBConfig");

const app = express();

const cors=require('cors')

app.use(cors("*"))
app.use(express.json())

app.use(express.urlencoded({extended:true}))

const ProductRouter = require("./router/ProductRouter")
app.use("/products",ProductRouter)

app.listen(3001, function () {
  console.log("start server");
});
