const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const cors = require('cors')
const PORT = process.env.PORT || 5000
require("./DB/connection")
require("./controllers/store")
const store=require("./controllers/store")
// const router = require("./routes/route")
const getTopResults = require("./controllers/getTopResults")
//used this store() function to store the top data
// store()
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/api",getTopResults)



app.listen(PORT,()=>{
    console.log("App is listening")
    store()
})