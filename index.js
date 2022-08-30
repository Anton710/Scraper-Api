const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 3000;  

const apiKey = "";
const baseURL = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Welcome to Amazon Scraper Api.");

});
//GET Product Details
app.get('/products/:productId',async(req,res)=>{
    const {productId} = req.params;
    
    try {
       const response = await request(`${baseURL}&url=https://www.amazon.com/dp/${productId}`);
        //const response = await request("http://api.scraperapi.com?api_key=4aac30dd101a4404eca9a0d45823b8cd&url=http://httpbin.org/ip");
        res.json(JSON.parse(response));
    }catch(error){
        res.json(error);
    }
});



app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));


