import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import incidentRoutes from "./routes/incidentRoutes";

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
app.use(express.json());

app.use('/incidents', incidentRoutes);

const PORT = process.env.PORT || 3000;

if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is not defined in environment variables.');
}

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}`);
    });
}).catch((err) => {
    console.log(`Unable to connect to database.\n${err}`);
});
