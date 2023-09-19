const express = require("express");
const app = express();
const cors = require("cors")

app.use(express.json())
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","PUT","POST","DELETE"],
    credentials:true,
}))


//Route Imports
const user = require("./routes/userRoutes");

app.use("/api/v1",user)

module.exports=app