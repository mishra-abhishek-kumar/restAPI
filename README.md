
# Backend Assignment

## Project Description
This project is a REST API server built using Node.js that allows users to perform CRUD operations (Create, Read, Update, Delete) on a MongoDB database. The API manages a collection of movies with details such as name, image, and summary.


## Table of Contents

• Installation
• API Endpoints
• Data Model
• Technologies Used

### Installation

1. Clone the repository:
* git clone https://github.com/yourusername/backend-assignment.git
* cd backend-assignment

2. Install the dependencies:
* npm Install

3. Set up environment variables:
* Create a .env file in the root directory and add your MongoDB connection string:
* Inside the .env file add like: MONGODB_URI=your_mongodb_connection_string

4. Start the server:
* npm start

## API Endpoints

1. Create a movie
* URL: /api/movie/
* Method: POST

2. Get all movies
* URL: /api/getall
* Method: GET

3. Get one movies
* URL: /api/:id
* Method: GET

4. Update one movies
* URL: /api/:id
* Method: PUT

4. Delete one movies
* URL: /api/:id
* Method: DELETE

## Data Model
The movie data model includes the following fields:

* name: String, required
* image: String, required
* summary: String, required

## Technologies Used
* Node.js
* Express.js
* MongoDB
* Mongoose 