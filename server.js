const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Route to handle POST requests to /api/data
app.post('/api/data', (req, res) => {
    const inputData = req.body.data;
    const message = `Received data from frontend: ${inputData}`;
    res.json({ message });
});

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
