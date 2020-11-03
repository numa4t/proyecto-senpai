const express = require("express");
const app = express;

app.get("/",(request, response) =>{
    /*const data = await procesarDAta();*/
    response.send("Hello World")
});