const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const categoriesRouter = require("./routes/categoriesRouter");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//
app.use("/categories", categoriesRouter);

// set.2 connect to DataBase
const connectDB = async () => {
  try {
    // await mongoose.connect("mongodb://127.0.0.1:27017/e-bazar");
    await mongoose.connect(
      "mongodb+srv://ecommerce2023:SA76m2EtbuUUIOIW@cluster0.wzvkotr.mongodb.net/?retryWrites=true&w=majority"
    );
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

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
