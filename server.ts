import Express from "express";
import CORS from "cors";
import { graphqlHTTP } from "express-graphql";
import {schema, resolver} from "./API";

const app = Express();
app.use(CORS({
    origin: "https://visionary-blini-6d1d65.netlify.app"
})); 



app.use("/graphql", graphqlHTTP((req, res, param) => {
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

app.listen(8080, () => {
    console.log("server running")
})