const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express();
const port = 5000;

//middleware
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hell world!');
})

app.listen(port, () => {
    console.log('Example app listening on port', port);
});

//const uri = `mongodb+srv://<username>:<password>@cluster0.jvivwjj.mongodb.net/?retryWrites=true&w=majority`
const uri = `mongodb://localhost:27017`

const client = new MongoClient(uri, {
    serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true }
});

async function run() {
    try {
        // Connect the client to the server
       // const dbName = "myEcommerce_projects";
        // const categoriesCollection = client.db("localDb").collection("BooksCollection");
        const categoriesCollection = client.db("LocalDb").collection("booksCollection");
        const usersCollection = client.db("myEcommerce_projects").collection("users");


        app.get('/categories', async (req, res) => {

            const query = {}
            const categories = await categoriesCollection.find(query).toArray();
            res.send(categories)
        })


        app.put('/users', async (req, res) => {
            console.log(req.body,'this is req.body')
            const user = req.body;
            const email = user.email
            console.log(email,'email')
            const filter = { email: email };
            const options = { upsert: true };
            const updateDoc = {
                $set: user
            }
            const result = await usersCollection.updateOne(filter, updateDoc, options);
            res.send(result)

        });


    } finally {
        // Ensures that the client will close when you finish/error

    }
}
run().catch(err => console.error(err))
