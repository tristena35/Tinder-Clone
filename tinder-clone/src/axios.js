import axios from 'axios';

const instance = axios.create({
    //baseURL: 'http://localhost:8081'
    // Heroku link below
    baseURL: 'https://tinder-clone-backend-tristen.herokuapp.com',
});

export default instance;

// axios make http requests very easy