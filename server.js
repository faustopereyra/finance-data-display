const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require("cors")

const app = express();
app.use(cors())

let marketList = fs.readFileSync("./data/market_list.json");
marketList = JSON.parse(marketList)
let marketView = fs.readFileSync("./data/market_view.json");
marketView = JSON.parse(marketView)


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


// Two api endpoints that return the market data
app.get('/api/getList', (req, res) => {
    res.json(marketList)
});

app.get('/api/getView', (req, res) => {
    res.json(marketView)
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);