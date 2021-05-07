import config from "./../config/config";
import app from "./express";
import mongoose from "mongoose";
import bidding from "./controllers/bidding.controller";
import { MongoClient } from "mongodb";

// Connection URL
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// console.log("colelctions iss", connection);
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

// async function main() {
//   const uri =
//     "mongodb+srv://haroon:hak123@cluster0.qoxww.mongodb.net/MarketPlace?retryWrites=true&w=majority";

//   const client = new MongoClient(uri, {
//     useUnifiedTopology: true,
//   });

//   try {
//     // Connect to the MongoDB cluster
//     await client.connect();
//     const pipeline = [
//       { $match: { number_of_sales: { $gt: 2 } } },
//       { $set: { is_a_weak_seller: false } },
//     ];
//     console.log("shops", client.db("MarketPlace").collection("shops"));
//     const collection = client.db("MarketPlace").collection("shops");

//     // See https://mongodb.gitb.i/node-mongodb-native/3.6/api/Collection.html#watch for the watch() docs
//     const changeStream = collection.watch(pipeline);

//     changeStream.on("change", (next) => {
//       console.log("change is happening", next);
//     });
//   } catch (e) {
//     console.error("reporting", e);
//   } finally {
//     // await client.close();
//   }
// }

// main().catch(console.error);

const server = app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});

bidding(server);
