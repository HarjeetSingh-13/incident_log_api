import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import Incident from './model/Indident';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const sampleIncidents = [
    {
        title: 'Sample Incident 1',
        description: 'Description for sample incident 1',
        severity: 'Low',
    },
    {
        title: 'Sample Incident 2',
        description: 'Description for sample incident 2',
        severity: 'Medium',
    },
    {
        title: 'Sample Incident 3',
        description: 'Description for sample incident 3',
        severity: 'High',
    },
];

const insertSampleData = async () => {
    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI is not defined in environment variables.');
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        await Incident.deleteMany({});
        console.log('Existing data cleared');

        const result = await Incident.insertMany(sampleIncidents);
        console.log('Sample data inserted');
        process.exit();
    } catch (error) {
        console.error('Error inserting sample data:', error);
        process.exit(1);
    }
}

insertSampleData()