require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn")


const products = require("./models/productSchema");

const DefaltData = require("./defaultdata");
const cors = require("cors");
const router = require("./routes/router");

app.use(express.json());
app.use(cors());
app.use(router);

const port = 8005;

app.listen(port , ()=>{
    console.log(`server is running on port no ${port}`);
});


DefaltData();