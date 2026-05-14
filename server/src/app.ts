import express from 'express';

const app = express();

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

app.get('/api/contact', (req, res) => {
    res.json({
  id: 1,
  name: "Alex Johnson",
  username: "alexj_92",
  email: "alex.johnson@example.com",
  address: {
    street: "123 Mockingbird Lane",
    city: "Anytown",
    zipcode: "90210"
  },
  phone: "555-010-9988",
  website: "alexjohnson.dev",
  company: {
    name: "TechFlow Solutions",
    catchPhrase: "Streamlining your digital future"
  }
})

})

export default app;