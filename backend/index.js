const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./router/user");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
connectDB();

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});