const express = require("express");
require('dotenv').config()
const mongoose = require("mongoose");
const cors = require("cors");
const categoriesRouter = require("./routes/categoriesRouter");
const seedRouter = require("./routes/seedRouter");
const productRouter = require("./routes/productRouter");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//
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

//end code
app.get("/", (req, res) => {
  res.send("welcome to home page");
});

app.listen(port, async () => {
  console.log(`server is running at http://localhost:${port}`);
  await connectDB();
});
