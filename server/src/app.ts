import express from 'express';
import healthRoutes from './routes/health.routes.js';
import notesRouter from './routes/notes.routes.js';

const app = express();

app.use(express.json());

app.use('/api', healthRoutes );

app.use('/api', notesRouter);

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


// app.get('/api/notes/:id', (req, res) => {
//     const { id } = req.params;
    
//     res.json({
//         noteId: id,
//         title: "Sample Note",
//         content: "This is a sample note content.",
//     })
// })


// app.get('/api/search', (req, res) => {
//     const query = req.query.keyword;
    
//     res.json({
//         "find": query,
//     })
// })


app.get('/api/search', (req, res) => {
    const {query} = req.query;
    
    res.json({
        find: query,
    })
})

// app.use(express.json());

export default app;