const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// server connection
app.listen(PORT, () => console.log(`Connected on port: ${PORT}...`));