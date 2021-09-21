const express = require("express");
const csv=require('csvtojson')
const api = express.Router();
const app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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


// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});