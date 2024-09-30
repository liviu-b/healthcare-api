# HealthTech API for Patient Management

## Overview
The **HealthTech API** is designed to securely manage patient data, schedule appointments, and integrate with external healthcare systems using FHIR (Fast Healthcare Interoperability Resources). This API provides CRUD functionality for patients, allowing healthcare professionals to manage patient records efficiently.

## Features 
- Patient management: Create, update, delete, and retrieve patient records.
- Appointment management (coming soon).
- Secure data storage with MongoDB.
- Middleware for error handling and request logging.
- Integration with FHIR (future development).

## Technologies
- **Node.js** with **Express.js** as the web framework.
- **MongoDB** with **Mongoose** for database management.
- **JWT** (JSON Web Tokens) for secure authentication (future development).
- **Jest** and **Supertest** for automated testing.
- **Docker** (optional) for containerized deployment.

## Installation

### Prerequisites
- Node.js
- MongoDB (local or MongoDB Atlas)
- Postman (optional, for manual API testing)

### Steps to Run Locally

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/healthtech-api.git
    cd healthtech-api
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the root directory with the following variables:
    ```bash
    MONGO_URI=<Your MongoDB connection string>
    PORT=5000
    ```

4. **Run the API**:
    ```bash
    npm start
    ```

5. **Test the API using Postman**:
    - Import the following endpoints into Postman or use cURL to test.

## API Endpoints

### Patients

| Method | Endpoint              | Description                  |
|--------|-----------------------|------------------------------|
| GET    | `/api/patients`        | Get all patients              |
| GET    | `/api/patients/:id`    | Get patient by ID             |
| POST   | `/api/patients`        | Create a new patient          |
| PUT    | `/api/patients/:id`    | Update a patient by ID        |
| DELETE | `/api/patients/:id`    | Delete a patient by ID        |

### Sample Request

#### Create a New Patient
- **POST** `/api/patients`
- **Request Body**:
    ```json
    {
      "name": "John Doe",
      "age": 30,
      "gender": "Male",
      "medicalHistory": ["Diabetes", "Hypertension"]
    }
    ```

#### Response:
    ```json
    {
      "_id": "60c72b2f4f1a4b002fae8d33",
      "name": "John Doe",
      "age": 30,
      "gender": "Male",
      "medicalHistory": ["Diabetes", "Hypertension"],
      "appointments": [],
      "__v": 0
    }
    ```

## Running Tests

This project uses **Jest** and **Supertest** for automated testing.

- Run the tests with:
    ```bash
    npm test
    ```

## Future Features
- Appointment scheduling and management.
- Integration with FHIR for external health data.
- JWT Authentication for secure API access.
- Role-based access control (RBAC).

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License.
