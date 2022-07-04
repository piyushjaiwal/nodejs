const reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("Please enter your age.");
    }else if(req.query.age<18){
        res.send("You are unauthorized to see the content.");
    }else{
        next();
    }
}

module.exports=reqFilter;