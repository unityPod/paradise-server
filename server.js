"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_graphql_1 = require("express-graphql");
const API_1 = require("./API");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "https://visionary-blini-6d1d65.netlify.app"
}));
app.use("/graphql", (0, express_graphql_1.graphqlHTTP)((req, res, param) => {
    return {
        schema: API_1.schema,
        rootValue: API_1.resolver,
        graphiql: true,
        context: {
            request: req,
            response: res,
        }
    };
}));
app.listen(8080, () => {
    console.log("server running");
});
