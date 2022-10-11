import { buildSchema, GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString } from "graphql";

//Endpoint for home include all the clothing
//Endpoint for women
//Endpoint for men
//Sweaters
//Pants
//Shopping cart 

const schema = buildSchema(`
    type Query {
        items(limit: Int): [Item]
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
`)

export default schema; 