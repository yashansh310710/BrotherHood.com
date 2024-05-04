const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Set up storage using multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Serve static files from the uploads directory
app.use(express.static('uploads'));

// Handle POST request to /upload
app.post('/upload', upload.single('videoFile'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    
    const videoName = req.body.videoName;
    // Save video metadata and file path to database (not implemented here)
    
    res.sendStatus(200);
});

// Start the server
app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
