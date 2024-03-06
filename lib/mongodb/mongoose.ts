import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log("Mongo DB is Connected");
        return;
    }

    try {
        const mongodbUri = process.env.MONGODB_URI;
        if (!mongodbUri) {
            throw new Error('MONGODB_URI environment variable is not defined');
        }
        await mongoose.connect(mongodbUri, {
            dbName: "CreatorisLab",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log("MongoDb is connected");
    } catch (error) {
        console.log(error);
    }

};
