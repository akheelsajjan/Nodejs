
const express = require('express');
const appConfig = require('./config/appconfig')
const app = express();

let hw = (req, res) => res.send('Hello World!')
app.get('/',hw );

app.listen(appConfig.port, () => console.log(`Example app listening on port ${appConfig.port}!`))