import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    id: { type: String, unique: true },
    title: { type: String },
    price: { type: Number },
    description: { type: String },
    category: { type: String },
    image: { type: String },
    rate: { type: Number}
})

const Item = mongoose.model("Item", ItemSchema);


export default Item; 
