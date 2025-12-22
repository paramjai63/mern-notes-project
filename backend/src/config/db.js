import mongoose from "mongoose"


export const connectDB = async() => {
    try{

        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to the mongoDB database")

    }catch(error){
        console.error("Error connecting to mongoDB",error)
        process.exit(1) // exit with failiur status code "1"
    }
}