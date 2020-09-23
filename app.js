
const express=require('express');
const app = express();
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const routes=require('./modules/api');

mongoose.connect('mongodb://localhost:27017/iplapi',{ useNewUrlParser: true,useUnifiedTopology: true });

mongoose.Promise=global.Promise;

app.use(bodyparser.json());


app.use(routes);



app.listen(80);