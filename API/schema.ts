import { buildSchema } from "graphql";

export default const schema = buildSchema(`
    type Query {
        jackets(limit: Int): [Jacket]
    }

    type Jacket {
        id: ID!
        name: String!
        brand: String!
        price: Float!
    }
`)