import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ 
        success: true,
        message: "Server is Healthy"
    })
})

app.get('/api/about', (req, res) => {
    res.json({
        project: "Notes App",
        version: "1.0"
    })
})

app.post('/api/test', (req, res) => {
    console.log(req.body);
    
    res.json({
        success: true,
        receivedData: req.body,
    })
})

app.post('/api/login', (req, res) => {
    console.log(req.body);
    
    res.json({
        success: true,
        message: "Login Successful",
    })
})

app.get('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;
    
    res.json({noteId})
})

app.get('/api/search', (req, res) => {
    const query = req.query.keyword;
    
    res.json({
        "find": query,
    })
})

// app.use(express.json());

export default app;