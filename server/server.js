require('dotenv').config();

const express = require('express')
const path = require('path');
const port = process.env.PORT || 8080


const app = express()

app.use('/', express.static(path.join(__dirname, '../react/dist')))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))