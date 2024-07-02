import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const register = (user) => axios.post(`${API_URL}/api/auth/register`, user);
export const login = (credentials) => axios.post(`${API_URL}/api/auth/login`, credentials);
export const fetchQuiz = () => axios.get(`${API_URL}/api/quiz`);
export const submitResults = (results) => axios.post(`${API_URL}/api/quiz/results`, results);
