const User = require("../models/userModel")
const axios = require("axios");

exports.fetchData = async(req,res,next)=>{
    try{
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');

        const top10 = Object.values(response.data).slice(0,10);

        await User.deleteMany({});
        await User.insertMany(top10);

        res.status(200).json({
            message:"Data fetching successfull"
        })

    }
    catch(error){
        console.error(error);
    res.status(500).json({ 
        error:"Error fetching and storing data."
    });
    }
}