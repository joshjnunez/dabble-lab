import express from "express";
import mongoose from "mongoose";
import { ApolloServer, gql } from "apollo-server-express";
import { resolvers } from "./resolver";
import { typeDefs } from "./typeDefs"


const server = async () => {

    const app = express();
    const server = new ApolloServer ({
        typeDefs,
        resolvers
    })


    await server.start();
  
    server.applyMiddleware({app});
   

    app.get('/', (req, res)=> {
        res.send("Hello World!"); 
    })

    app.listen({port: 4001}, ()=> {
        console.log("connected!");
    })

}

server();