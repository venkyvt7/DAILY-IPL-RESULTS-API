const mongoose=require('mongoose');

const schema=mongoose.Schema;

const IPL=new schema({

Date:String,
team1:String,
team2:String,
result:String,


});

const IPLapi=mongoose.model('IPL',IPL);

module.exports=IPLapi;
