require('dotenv').config()
require("../config/db.config")

const express = require("express")
var bodyParser = require('body-parser');



const app = express()
const port = process.env.PORT || 4000

const routerTalks = require("./Routes/taskRouter")

// uso de middleware
app.use(bodyParser.json());

//uso del enrutador
app.use("/", routerTalks)

//puerto donde estara el servidor
app.listen((port), () => {

    console.log(`server in port ${port}`)
})



