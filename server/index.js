const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();
const createError = require('http-errors');
const morgan = require("morgan")
const port = process.env.PORT || 5000;
const categoriesRouter = require("./routes/categoriesRouter");
const seedRouter = require("./routes/seedRouter");
const productRouter = require("./routes/productRouter");
const { errorResponse } = require("./controllers/responseController");

const app = express();

//middleware
app.use(morgan("dev"))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("welcome to home page");
});

app.use("/categories", categoriesRouter);
app.use("/api/seed", seedRouter);//seeding data base
app.use("/api/products", productRouter);//seeding data base

// set.2 connect to DataBase
const url = process.env.DB_URL
const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log("Database is connected");
    } catch (error) {
        console.log("Database is not connected", error);
    }
};

// express error handling middleware
// client error handling
app.use((req, res, next) => {
    next(createError(404, "route not found"))
});

// server error handling -all the error coming here.
app.use((err, req, res, next) => {
    return errorResponse(res, {
        statusCode: 500,
        message: 'Internal Server Error',
    })
})

app.listen(port, async () => {
    console.log(`Server is running at http://localhost:${port}`);
    await connectDB();
});