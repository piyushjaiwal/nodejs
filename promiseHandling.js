let a=10, b=20;


let waitingData=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(30);
    }, 2000);

})

waitingData.then((resolution)=>{
        b=resolution;
        console.log(a+b);
});


