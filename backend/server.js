const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory data storage (for simplicity)
const users = [];
const houses = [];
const maintenanceRequests = [];
const guests = [];

// Routes

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to KDSI Staff House Management System API');
});

// User routes
app.post('/api/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).send(user);
});

app.get('/api/users', (req, res) => {
    res.send(users);
});

// House routes
app.post('/api/houses', (req, res) => {
    const house = req.body;
    houses.push(house);
    res.status(201).send(house);
});

app.get('/api/houses', (req, res) => {
    res.send(houses);
});

// Maintenance request routes
app.post('/api/maintenance', (req, res) => {
    const request = req.body;
    maintenanceRequests.push(request);
    res.status(201).send(request);
});

app.get('/api/maintenance', (req, res) => {
    res.send(maintenanceRequests);
});

// Guest routes
app.post('/api/guests', (req, res) => {
    const guest = req.body;
    guests.push(guest);
    res.status(201).send(guest);
});

app.get('/api/guests', (req, res) => {
    res.send(guests);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});