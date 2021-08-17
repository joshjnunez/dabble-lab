import { Location } from "./models/location";


export const resolvers = {
    Query: {
        dataSet: () => Location.find()
    }, 

    Mutation: {
        createLoc: async(_, { country, year, area, totalPop }) => {
            const place = new Location({country, year, area, totalPop});
            await place.save();
            return place;
        }
    }
}