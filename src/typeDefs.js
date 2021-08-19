import { gql } from "apollo-server-express";

export const typeDefs = gql`

type Query {
    id: ID!
    location: [Location!]!
}

type Location {
    id: ID!
    country: String!,
    year: String!,
    area: Int!,
    totalPop: Int!
}

type Mutation {
    createLoc(country: String!, year: String!, area: Int!, totalPop: Int!): Location!
}

`

