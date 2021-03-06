const express = require("express");
const debug = require("debug");
const dotenv = require("dotenv");
const mongo = require("./utils/DB");

const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const productsRoute = require("./routes/product")


mongo()
dotenv.config()

const app = express()
debug(express);


app.use(express.json());

app.use("/api/products",productsRoute)
app.use("/api/user",userRoute);
app.use("/api/auth",authRoute);

app.listen(5000,()=>{
    console.log(`Listining on 5000`);
})


