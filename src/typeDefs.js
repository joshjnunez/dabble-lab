import { gql } from "apollo-server-express";

export const typeDefs = gql`

type Query {
    helloWorld: String!
    dataSet: [Location!]!
}

type Location {
    id: ID!,
    country: String!
    year: String!
    area: Int!
    totalPop: Int!
}

type Mutation {
    createLocation(country: String!): Location!
}
`;

