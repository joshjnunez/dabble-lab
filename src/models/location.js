
import mongoose from "mongoose";
import { schemaData } from "../../schema";

export const Location = mongoose.model("Location", { schemaData })