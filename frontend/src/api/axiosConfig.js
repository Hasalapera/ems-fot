import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api', // Backend එකේ URL එක
});

export default api;