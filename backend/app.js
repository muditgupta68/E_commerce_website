const express = require("express");
const errorMiddleware = require("./middleware/error");
const app = express();
app.use(express.json());

//route imports
const products = require("./routes/productRoute");

//using routes
app.use("/api/product", products);

app.use(errorMiddleware);


module.exports = { app, express };
