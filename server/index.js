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

const client = new MongoClient(uri, { serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true }
});

async function run() {
    try {
        // Connect the client to the server
        const categoriesCollection = client.db("myEcomorces").collection("products");

        

        app.get('/categories', async (req, res) => {
 
            const query = {}
            const categories = await categoriesCollection.find(query).toArray();
            res.send(categories)
        }) 


    } finally {
        // Ensures that the client will close when you finish/error

    }
}
run().catch(err => console.error(err))
