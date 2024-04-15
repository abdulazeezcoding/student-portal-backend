import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

const PORT = process.env.PORT;
const mongoURI = process.env.MONGO_URI;
await mongoose.connect(mongoURI);

app.listen(PORT, () => console.log(`Express app is running on port ${PORT}`));