// import http from 'http';
import app from './app.js';

const PORT = 5000;

// const server = http.createServer((req,res) => {
//     res.write("Hello From Backend");
//     res.end();
// })

app.listen(5000, () => {
    console.log(`Server is running on port ${PORT}`);
});

