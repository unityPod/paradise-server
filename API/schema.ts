import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Query {
        items(limit: Int): [Item]
        men(limit: Int): [Item]
        women(limit: Int): [Item]
        electronics(limit: Int): [Item]
        jewelery(limit: Int): [Item]
    }

    type Item {
        id: Int!
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
`)

export default schema; 