const mongoose = require('mongoose');
const config = require('config');
const db = config.get("mongoURI");

const connectDb = async () => {
  try {
    console.log('Mongodb connected');

    await mongoose.connect(db, { useNewUrlParser: true });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDb;
