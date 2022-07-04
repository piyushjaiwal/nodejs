const app= require('./app')
console.log(app.z(app.x,app.y));
const arr=[1,2,5,6,3];
console.log(arr);
arr.filter((item)=>{
    (item>2?console.log(item):'');
});

