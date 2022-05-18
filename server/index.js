const express = require("express");

const PORT = process.env.PORT || 3001;

const bodyParser= require('body-parser');

const app = express();

const dotenv = require("dotenv");
dotenv.config();

const MongoClient = require('mongodb').MongoClient

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ypjos.mongodb.net/?retryWrites=true&w=majority`;

MongoClient.connect(connectionString, {
    useUnifiedTopology: true
  }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
})

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
    res.json({ message: "Test test" });
});

app.post('/quotes', (req, res) => {
    console.log(req.body)
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
