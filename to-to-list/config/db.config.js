const mongoose = require("mongoose")

const dbURL = process.env.DATABASE

const dbConn = mongoose.connect((dbURL), { useNewUrlParser: true })

module.exports = dbConn

// verify conection db

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});


