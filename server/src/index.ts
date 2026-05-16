// import http from 'http';
import app from './app.js';
import { env } from './config/env.js';

// const server = http.createServer((req,res) => {
//     res.write("Hello From Backend");
//     res.end();
// })

app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
});

