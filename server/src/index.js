import express from 'express';
import { SERVER_PORT } from './config/config.js';
import connectorDb from './models/DatabaseConnector.js';

// Create the Express app
const app = express();

// Parse JSON bodies for POST requests
app.use(express.json());

// MySQL connection setup
const [users] = await connectorDb.query('SELECT * FROM user');
console.log(users);

// Define your routes and middleware here

// Start the server
const PORT = SERVER_PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
