import axios from "axios";
import { privateDecrypt } from "crypto";
import { response } from "express";
import { Item, Context, Limit } from "./types";

const query = {
    items: async(input:Limit, context:Context) => {
        return axios.get("https://fakestoreapi.com/products/").then(
            response => {
                return response.data.map(
                    (item: Item) => ({id: item.id, title: item.title, price: item.price, description: item.description, category: item.category, image: item.image})
                )
            }
        )
    }, 
    // men: async(input:Limit, context:Context) => {
    //     const menData = UseData.filter((item: Item) => item.categories === "men")
    //     return input.limit? menData.slice(0, input.limit): menData
    // },
    // women: async(input:Limit, context:Context) => {
    //     const womenData = UseData.filter((item: Item)=> item.categories === "women")
    //     return input.limit? womenData.slice(0, input.limit): womenData
    // }
}

export default query; 