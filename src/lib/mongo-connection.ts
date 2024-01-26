import mongoose from "mongoose";

let isConnected: boolean = false;

export async function connectToDB() {
  mongoose.set("strictQuery", true);
  if (!process.env.DB_CONNECTION_URL) return console.log("no connection url");
  if (isConnected) return console.log("already connected");

  try {
    await mongoose.connect(process.env.DB_CONNECTION_URL);
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
}
