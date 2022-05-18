const express = require("express");

const PORT = process.env.PORT || 3001;

const bodyParser= require('body-parser');

const app = express();


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
