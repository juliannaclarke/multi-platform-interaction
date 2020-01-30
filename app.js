const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const LISTEN_PORT = 8080;

app.use(express.static(__dirname + "/public")); //tells node where "home" is

//routes
app.get("/",function(req, res){
    res.sendFile(__dirname +"public/index.html");
});

server.listen(LISTEN_PORT,'0.0.0.0');
console.log("Listening on port: " + LISTEN_PORT);