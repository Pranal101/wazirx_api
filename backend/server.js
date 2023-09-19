const app = require("./app.js")
const dotenv = require("dotenv");
const connectDatabase = require("./config/database.js")



//config
dotenv.config({path:"backend/config/config.env"})

//Database
connectDatabase()

app.listen(process.env.PORT,()=>{
    console.log(`Server started on Port ${process.env.PORT}`);
});