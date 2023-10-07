const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const categoriesRouter = require("./routes/categoriesRouter");
const seedRouter = require("./routes/seedRouter");
const productRouter = require("./routes/productRouter");
const { errorResponse } = require("./controllers/responseController");
const morgan = require("morgan");
const userRouter = require("./routes/userRouter");
const ordersRouter = require("./routes/ordersRouter");
const port = process.env.PORT || 5000;

const app = express();

//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("welcome to home page");
});

app.use("/categories", categoriesRouter);
app.use("/api/seed", seedRouter); //seeding data base
app.use("/api/products", productRouter); //seeding data base
app.use("/api/", userRouter); 
app.use("/api/", ordersRouter); 

// set.2 connect to DataBase

const url = process.env.DB_URL;
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
  next(res.status(404).json({ message: "route not found" }));
});

// server error handling -all the error coming here.
app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode: 500,
    message: "Internal Server Error end",
  });
});

app.listen(port, async () => {
  console.log(`Server is running at http://localhost:${port}`);
  await connectDB();
});
