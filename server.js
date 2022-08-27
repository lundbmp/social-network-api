const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/socialNetworkDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    !error
      ? console.log("Connected to database...")
      : console.log("Error connecting to database: " + error);
  }
);

// server connection
app.listen(PORT, () => console.log(`Connected on port: ${PORT}...`));
