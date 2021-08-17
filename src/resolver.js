import { Location } from "./models/location";

export const resolvers = {
    Query: {
        helloWorld: () => "hello world",
        dataSet: () => Location.find()
    }, 

    Mutation: {
        createLocaton: async(_, { country }) => {
            const place = new Location({country});
            await place.save();
            return place;
        }
    }
}