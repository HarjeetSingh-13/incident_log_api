import mongoose from 'mongoose';

export enum SeverityLevel {
    LOW = 'Low',
    MEDIUM = 'Medium',
    HIGH = 'High'
}

const incidentSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    severity: { 
        type: String, 
        enum: Object.values(SeverityLevel),
        required: true 
    },
    reported_at: { 
        type: Date, 
        default: Date.now 
    }
});

export default mongoose.model('Incident', incidentSchema);
