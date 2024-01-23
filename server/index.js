const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const categoriesRouter = require("./routes/categoriesRouter");
const seedRouter = require("./routes/seedRouter");
const productRouter = require("./routes/productRouter");
const createError = require("http-errors");
const { errorResponse } = require("./controllers/responseController");
const morgan = require("morgan");
const userRouter = require("./routes/userRouter");
const ordersRouter = require("./routes/ordersRouter");
const port = process.env.PORT || 5000;

const app = express();
const corsOptions = {
  origin:"*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",};
app.use(cors(corsOptions));

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static("build"))
app.use("/uploads", express.static("uploads"));

//routes
app.use("/api", categoriesRouter);
app.use("/api", seedRouter); //seeding data base
app.use("/api", productRouter); //seeding data base
app.use("/api", userRouter);
app.use("/api", ordersRouter);

// connect to DataBase
// const url = `mongodb://localhost:27017/LocalDb`
const url = process.env.DB_URL;
const connectDB = async () => {
  try {
    // await mongoose.connect(url);
    await mongoose.connect(url, { dbName: "egonj" });
    console.log("Database is connected now");
  } catch (error) {
    console.log("Database is not connected", error);
  }
};

app.get("/api", (req, res) => {
  res.send("Welcome to Backend Home Page");
});

// express error handling middleware
// client error handling
app.use((req, res, next) => {
  next(createError(404, "Route Not Found"));
});

// server error handling -all the error coming here.
app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message,
  });
});

app.listen(port, async () => {
  console.log(`Server is running at http://localhost:${port}`);
  await connectDB();
});

// Export app for deploy purpose
module.exports = app;
