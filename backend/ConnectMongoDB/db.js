
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const mongoDB = process.env.MONGODB_URI;
async function connectDB() {
    try {
        await mongoose.connect(mongoDB);

        console.log('MongoDB is connected');
    } catch (error) {
        console.error(`Unable to connect to the server: ${error}`);
    }
}

export default connectDB;
