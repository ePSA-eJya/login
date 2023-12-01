const mongoose=require("mongoose")

// mongoose.connect("mongodb://localhost:27017/loginsignup")
mongoose.connect("mongodb://0.0.0.0:27017/loginsignup")

.then(()=>{
    console.log("mongodb connected");
})
.catch((e)=>{
    console.log("failed to connect",e.message);
})

const loginschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model('collection',loginschema)

module.exports=collection