import Express from "express";
import CORS from "cors";
import { graphqlHTTP } from "express-graphql";
import { schema, resolver } from "./API";
import connectMongoDB from "./connect";


const app = Express();
app.use(CORS({
    origin: [
        "http://localhost:3000",
        "https://visionary-blini-6d1d65.netlify.app"
    ]
}));
connectMongoDB();



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

app.listen(process.env.PORT || 4000, () => {
    console.log("server running")
})