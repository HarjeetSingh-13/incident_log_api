# HumanChain AI Safety Incident Log API

## Technology Stack
- **Language**: TypeScript
- **Framework**: Node.js with Express
- **Database**: MongoDB Atlas (cloud-hosted)
- **ODM**: Mongoose

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB Atlas account

### Installation

1. **Clone the Repository**
```bash
git clone https://github.com/HarjeetSingh-13/incident_log_api.git
cd incident-log-api
```

2. **Install Dependencies**
```bash
npm install
```

3. **Environment Setup**
Create a `.env` file in the root directory:
```ini
PORT=3000
MONGODB_URI=your_mongodb_atlas_connection_string_here
```

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build TypeScript to JavaScript
npm run start    # Run production server
npm run seed     # Populate database with sample data
```

## Database Setup
- No manual setup needed
- Automatically connects to MongoDB Atlas
- Creates 'incidents' collection
- Seeds sample data on first run

### Sample Data
Run this command to populate the database:
```bash
npm run seed
```
The following sample incidents will be created:
```json
[
    {
        "title": "Sample Incident 1",
        "description": "Description for sample incident 1",
        "severity": "Low"
    },
    {
        "title": "Sample Incident 2",
        "description": "Description for sample incident 2",
        "severity": "Medium"
    },
    {
        "title": "Sample Incident 3",
        "description": "Description for sample incident 3",
        "severity": "High"
    }
]
```

## API Documentation

### Endpoints

#### 1. Get All Incidents
```bash
curl -X GET http://localhost:3000/incidents
```

#### 2. Create Incident
```bash
curl -X POST http://localhost:3000/incidents \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Incident Title",
    "description": "Description here",
    "severity": "Low"
  }'
```
Severity must be: "Low", "Medium", or "High"

#### 3. Get Incident by ID
```bash
curl -X GET http://localhost:3000/incidents/{id}
```

#### 4. Delete Incident
```bash
curl -X DELETE http://localhost:3000/incidents/{id}
```

## Project Structure
```
api/
├── src/
│   ├── controllers/    # Request handlers
│   ├── models/        # Database schemas
│   ├── routes/        # API routes
│   ├── app.ts        # Express app setup
│   └── sampleData.ts  # Seeding script
├── .env
└── package.json
```

## Design Decisions
- Cloud-based MongoDB Atlas for scalability
- Mongoose for data validation
- Consistent error handling
- Automated data seeding
- Modular project structure