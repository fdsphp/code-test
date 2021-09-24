const express = require("express");
const csv=require('csvtojson');
const cors=require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
//app.use(cors);

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});


app.use('/employees', async function (req, res) {
    const csvFilePath='100 Records (1).csv'
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            return jsonObj;
        })
    const jsonArray=await csv().fromFile(csvFilePath);
    res.json(jsonArray);
});
app.post('/saveData', async function (req, res) {
    res.json(req.body);
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});