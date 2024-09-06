import express from 'express';
import cors from 'cors';
import connectDB from './ConnectMongoDB/db.js';
import router from './route/route.js';

const app = express();
const port = 8002;


app.use(cors());

app.use(express.json());

// Connect to MongoDB
connectDB();

// Use the routes
app.use('/', router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
