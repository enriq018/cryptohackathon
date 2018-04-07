const express = require('express')
const path = require('path')
const app = express()
const request = require('request')
var bodyParser = require('body-parser')
var process_transaction = require("./Process_Transaction.js")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
  extended: true
})); 
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/style', express.static(path.join(__dirname, '/views/style')));

process_transaction.getIds();

app.get('/', (req, res) => res.render('index.html'))

app.listen(3002, () => console.log('Example app listening on port 3002!'));

app.post('/testResults', function(req, res){
    process_transaction.processTestResults(JSON.stringify(req.body));
    res.sendStatus(200);
});

app.post('/initIds', function(req, res){
    process_transaction.initId(JSON.stringify(req.body));
    res.sendStatus(200);
});

app.get('/getInitData', function(req, res){
    res.send(process_transaction.ids);
});







