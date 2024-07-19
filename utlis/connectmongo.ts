import mongoose from "mongoose";

const connectMongoose = async () =>
  mongoose
    .connect("mongodb://127.0.0.1:27017/next",{})
    .then(() => {
      console.log("DB Connected");
    })
    .catch((e) => {
      console.log(e, "error");
    });

export default connectMongoose;
