
import mongoose from "mongoose";


export const Location = mongoose.model("Location", { country: String, year: String, area: Number, totalPop: Number })