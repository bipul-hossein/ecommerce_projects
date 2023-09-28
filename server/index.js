const express = require("express");
const mongoose = require('mongoose'); //set.1 require mongoose
const cors = require("cors");//middleware
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());

//data type use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set.3 create a schema
const dataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

//set.4 create a schema model
const Product = mongoose.model('products', dataSchema);

// set.2 connect to DataBase
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/e-bazar');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

    console.log("db is connected")
  } catch (error) {
    console.log("db is not connected");
    console.log(error);
  }
}

app.listen(port, async () => {
  console.log(`server is running at http://localhost:${port}`); await connectDB();
});

app.get("/", (req, res) => {
  res.send("welcome to home page");
});

app.post("/product", async (req, res) => {
  try {
    const newProduct = new Product({
      title: req.body.title,
      price: req.body.price,
    })
    const productData = await newProduct.save()
    res.status(201).send(productData);
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
});

