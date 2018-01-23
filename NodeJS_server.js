const http = require("http");
const url =  require("url");
const path =  require("path");
const cors = require('cors')
const bodyParser = require('body-parser');
const express = require('express');

var ContenuHTML = "<!DOCTYPE html><html><head><meta charset='utf-8'><title>MongoDB-J02</title></head><body></body>Page de garde fonk</html>";

//const urlencodedParser = bodyParser.urlencoded({ extended: false });
//const MongoClient = require("mongodb").MongoClient;
//----------------------------------------
// Configuration 


const app = express();
//app.use ("/static" , express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'dist')))
app.use(cors());
console.log("Configuration Express: OK");


//----------------------------------------
//
//
// Gestion des routes
//
//
const api = require("./server/apis/api");
app.use("/api", api);
console.log("Module API: OK");

app.get('/', (req, res) => {
	res.end(ContenuHTML);
});

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname,'server/routes/inconnu.html'));
});
console.log("Module Gestion routes: OK");

//----------------------------------------
//
//
// Instanciation du serveur
//
//
var server = app.listen(8080, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log("--------------------\nServeur NodeJS\nPort d'écoute %s:%s \n--------------------\n\n\n\n\n\n\n", host, port);
});

// Autre syntaxe
// const port = process.env.port || '8080';
// const server = http.createServer(app);
// server.listen(port,()=console.log('ok'+port));


















