const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');

const port = 3005;

const app = express();

app.use(cors());

// Serve static files from the "css" directory
app.use('/css', express.static(path.join(__dirname, 'css')));

// Serve static files from the "js" directory
app.use('/js', express.static(path.join(__dirname, 'js')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'basic1.html'));
}
);

const server = http.createServer(app);

server.listen(port, () => console.log(`Server started on port localhost:${port}`));
