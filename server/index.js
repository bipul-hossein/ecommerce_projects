const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const app = express();
const port = 5000;

//middleware
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hell world!");
});

app.listen(port, () => {
  console.log("Example app listening on port", port);
});

const uri = `mongodb+srv://ecommerce2023:SA76m2EtbuUUIOIW@cluster0.wzvkotr.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const categoriesCollection = client.db("Ecommerce").collection("Products");
    // const categoriesCollection = client.db("LocalDb").collection("booksCollection");

    app.get("/categories", async (req, res) => {
      const query = {};
      const categories = await categoriesCollection.find(query).toArray();
      res.send(categories);
    });
  } finally {
  }
}
run().catch((err) => console.error(err));
