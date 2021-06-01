const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri:
    process.env.MONGODB_URI ||
    "mongodb+srv://haroon:hak123@cluster0.qoxww.mongodb.net/MarketPlace?retryWrites=true&w=majority" ||
    process.env.MONGO_HOST ||
    "mongodb://" +
      (process.env.IP || "localhost") +
      ":" +
      (process.env.MONGO_PORT || "27017") +
      "/mernproject",
  stripe_connect_test_client_id: "ca_GOCwmGzXnJuXSC2o3XjRPs8hxaJEm6dA",
  stripe_test_secret_key: "pk_test_trtKTfzHcBU3Wwh3HmWSYcol003V3nb4wF",
  stripe_test_api_key: "pk_test_trtKTfzHcBU3Wwh3HmWSYcol003V3nb4wF",
  PAGE_ACCESS_TOKEN:
    "EAAMZCAGa1TwgBAI9Qesc2Rv4DLnJ5KooFSJNbIlDCeckJsFVUSAbeGZB9UCQ2rJ9XcOoaYBT2MebaZAUZAX6CocFfJM58e01yIWad1eAppFynuh4JHYp2OIY9TRfVIvDdxKrsDIHznKdZC2jcyVy0MsnRyiEojnKeYKqTZAoNlkwZDZD",
  MY_VERIFY_TOKEN: "kicii12w2",
};
// PAGE_ACCESS_TOKEN="EAAMZCAGa1TwgBAI9Qesc2Rv4DLnJ5KooFSJNbIlDCeckJsFVUSAbeGZB9UCQ2rJ9XcOoaYBT2MebaZAUZAX6CocFfJM58e01yIWad1eAppFynuh4JHYp2OIY9TRfVIvDdxKrsDIHznKdZC2jcyVy0MsnRyiEojnKeYKqTZAoNlkwZDZD",
// MY_VERIFY_TOKEN="kicii12w2"

export default config;
