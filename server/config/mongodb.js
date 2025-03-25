import mongoose from "mongoose";


mongoose.connection.on("connected", () => {
    console.log("MongoDB connected")
})
const connectDB = async () => {
    await (mongoose.connect(`${process.env.mongodb_uri}/Imagify`))
}

export default connectDB;