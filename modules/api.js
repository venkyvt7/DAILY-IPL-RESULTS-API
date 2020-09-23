
const express=require('express');
const app = express();

const IPL=require('./data.js');
const router=express.Router();

router.get('/api',function(req,res){

res.send("233k23");


});

router.post('/api',function(req,res){

    IPL.create(req.body).then(


        function(vall){
    
            res.send(vall);
        }
    
    
    )

})


module.exports=router;

