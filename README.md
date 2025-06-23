# Vehicle Management System

A RESTful API for vehicle management with CRUD operations using Node.js, Express, MongoDB, and EJS.

## Features

- Create, Read, Update, Delete operations for vehicles
- Image uploads using Multer
- MongoDB database for storage
- EJS templating engine for views
- RESTful API design
- Responsive UI with Bootstrap

## Vehicle Properties

- Name
- Price
- Image
- Description
- Brand

## Installation

1. Clone the repository
2. Install dependencies
```
npm install
```

3. Create `.env` file in the root directory with the following variables:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/vehicleDB
```

4. Make sure MongoDB is running on your machine

## Running the Application

For development:
```
npm run dev
```

For production:
```
npm start
```

## API Endpoints

- GET `/vehicles` - Get all vehicles
- GET `/vehicles/:id` - Get vehicle by ID
- POST `/vehicles` - Create a new vehicle
- PUT `/vehicles/:id` - Update a vehicle
- DELETE `/vehicles/:id` - Delete a vehicle

## Project Structure

```
Vehicle/
├── config/
│   └── multer.js
├── models/
│   └── Vehicle.js
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── uploads/
├── routes/
│   ├── index.js
│   └── vehicles.js
├── views/
│   ├── index.ejs
│   ├── layout.ejs
│   └── vehicles/
│       ├── add.ejs
│       ├── edit.ejs
│       ├── index.ejs
│       └── show.ejs
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- Multer
- Bootstrap
- Font Awesome
