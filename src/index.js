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

    try{
        await mongoose.connect("mongodb+srv://joshn:sailingNirvana87$@dabblelabproject.h5zws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true })
    } catch(err) {
       console.log(err);
    }
    
   

    app.get('/', (req, res)=> {
        res.send("Hello World!"); 
    })

    app.listen({port: 4001}, ()=> {
        console.log("connected!");
    })

}

server();