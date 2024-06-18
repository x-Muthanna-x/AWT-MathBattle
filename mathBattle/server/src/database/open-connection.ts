import mongoose from "mongoose";

const uri: string = process.env.DB_PATH || "";


export async function openConnection() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to the database");
    } catch (error) {
        console.error(error);
    }
}