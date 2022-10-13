let uri = "mongodb+srv://unitypod:94ngQAY9dgW.HPq@cluster0.lpqmaad.mongodb.net/test";
const mongoose = require("mongoose");
function connectMongoDB(){
    mongoose.connect(uri, () => {
      console.log("connected to db")
    })
  }


export default connectMongoDB;