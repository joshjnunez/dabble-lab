import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const schemaData = new Schema({
   country: {type: String},
   year: {type: String},
   area: {type: Number},
   totalPop: {type: Number}
});


