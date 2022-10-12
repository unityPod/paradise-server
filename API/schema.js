"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const schema = (0, graphql_1.buildSchema)(`
    type Query {
        items(limit: Int): [Item]
        men(limit: Int): [Item]
        women(limit: Int): [Item]
        electronics(limit: Int): [Item]
        jewelery(limit: Int): [Item]
    }

    type Item {
        id: ID!
        title: String!
        price: Float!
        description: String!
        category: String!
        image: String!
    }

    type ItemResponse{
        data: Item 
        error: String
        ok: Boolean
    }
`);
exports.default = schema;
