
const express = require('express');
const app = express();
const Path  = require('./AppConstants.js').Path;


app.get("/",function(request,response){    
    response.sendFile(__dirname+Path.HTML_PATH+"/index.html");
});
app.listen(8000);