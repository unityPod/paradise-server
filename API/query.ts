import axios from "axios";
import { Context, Limit } from "./types";
import ItemSchema from "../models/ItemSchema";

const query = {
    items: async(input:Limit, context:Context) => {
        let allItem = await ItemSchema.find();
        return allItem; 
    }
}

export default query; 