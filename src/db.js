import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Connected to database");
    } catch (error) {
        console.log(error);
    }
};