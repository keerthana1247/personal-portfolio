const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/contact', (req, res) => {
    console.log('Name:', req.body.name);
    console.log('Email:', req.body.email);
    console.log('Message:', req.body.message);

    res.send('Message received successfully!');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});