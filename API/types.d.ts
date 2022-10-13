import { Request, Response } from "express";

type Item = {
    id: string,
    title: string, 
    price: number, 
    category: string, 
    description: string, 
    image: string
}
type Context = {
    request: Request, 
    response: Response
}

type Limit = {
    limit: number
}


export {Item, Context, Limit};