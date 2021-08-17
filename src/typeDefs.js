import { gql } from "apollo-server-express";

export const typeDefs = gql`

type Query {
    dataSet: [Location!]!
}

type Location {
    country: String!,
    year: String!,
    area: Int!,
    totalPop: Int!
}

type Mutation {
    createLoc(country: String!, year: String!, area: Int!, totalPop: Int!): Location!
}

`;

