import Express from "express";
import CORS from "cors";
import { graphqlHTTP } from "express-graphql";

const app = Express();
app.use(CORS()); 

app.use("/paradise/search", graphqlHTTP((req, res, param) => {
    return {
        schema, 
        rootValue: resolver,
        graphiql: true,
        context: {
            request: req, 
            response: res,
        } 
    }
}))