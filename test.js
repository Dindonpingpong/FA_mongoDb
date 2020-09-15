
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017";

const fs = require('fs');

let rawdata = fs.readFileSync('Students.json');
let student = JSON.parse(rawdata);
console.log(student);


MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");

    db.close();
});