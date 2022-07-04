const mongoose=require('mongoose');

const main=async ()=>{
    await mongoose.connect('mongodb://localhost:27017/youtube');
    const ProductSchema=new mongoose.Schema({
            name:String,
            price:Number,
            brand:String,
            Category:String
    });
const ProductModel=mongoose.model('products',ProductSchema);
let data=new ProductModel({name:'anuj',price:1000,brand:'samsung',Category:'mobile'});
let result=await data.save();
console.log(result); 
}

main();