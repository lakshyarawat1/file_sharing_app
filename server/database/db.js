import mongoose from "mongoose";

export const db_connection = () => {
  try {
    mongoose
      .connect(process.env.MONGO_DB_URL, { useNewUrlParser : true })
      .then(() => console.log("Database connection established"));
  } catch (err) {}
};
