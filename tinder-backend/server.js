import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Cards from './dbCards.js';

// App Config
const app = express(); // creates instance
const port = process.env.PORT || 8081;
const connection_url = 'mongodb+srv://tristen:YeBlrzFwadrKjLBQ@cluster0.dlzyq.mongodb.net/tinderdb?retryWrites=true&w=majority';

// Middlewares
app.use(express.json());
// Add headers to each request
app.use(Cors());

// DB config
mongoose.connect(connection_url, {
    // Parameters to make connection smooth
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('Connected')
}).catch(()=>{
    console.log('Failed to connect to mongoose');
})

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello World'));

app.post('/tinder/cards', (req, res) => {
    // This variable holds infomation from card body that was pushed
    const dbCard = req.body;
    // Here is a function where we create a card in Card collection
    Cards.create(dbCard, (err, data) => {
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
});

app.get('/tinder/cards', (req, res) => {
    // Here is a function where we create a card in Card collection
    Cards.find((err, data) => {
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
});

// Listeners
app.listen(port, () => console.log(`listening on localhost: ${port}`));