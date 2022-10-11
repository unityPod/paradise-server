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
    men: async(input:Limit, context:Context) => {
        return axios.get("https://fakestoreapi.com/products/").then(
            response => {
                const menData = response.data.filter((item: Item) => item.category === "men's clothing")
                return input.limit? menData.slice(0, input.limit): menData
            }
        )
    },
    women: async(input:Limit, context:Context) => {
        return axios.get("https://fakestoreapi.com/products/").then(
            response => {
                 const womenData = response.data.filter((item: Item)=> item.category === "women's clothing")
                 return input.limit? womenData.slice(0, input.limit): womenData
            }
         )
     },
    electronics: async(input:Limit, context:Context) => {
        return axios.get("https://fakestoreapi.com/products/").then(
            response => {
                 const electronicsData = response.data.filter((item: Item)=> item.category === "electronics")
                 return input.limit? electronicsData.slice(0, input.limit): electronicsData
            }
         )
     },
    jewelery: async(input:Limit, context:Context) => {
        return axios.get("https://fakestoreapi.com/products/").then(
            response => {
                 const jeweleryData = response.data.filter((item: Item)=> item.category === "jewelery")
                 return input.limit? jeweleryData.slice(0, input.limit): jeweleryData
            }
         )
     }
}

export default query; 