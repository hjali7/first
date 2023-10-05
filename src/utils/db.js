import mongoose from "mongoose";

export default async function connect () {
    try {
        await mongoose.connect(process.env.MONGOES);
    } catch (error) {
        throw new Error('Connection failed!')
    }
}