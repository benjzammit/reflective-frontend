import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API || 'https://reflective-backend-ab1b2ca4473d.herokuapp.com/api';

const API = axios.create({ baseURL: API_BASE_URL });

// Add token to headers if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers['x-auth-token'] = token;
  }
  return req;
});

export const registerUser = (data) => API.post('/auth/register', data);
export const loginUser = (data) => API.post('/auth/login', data);
export const submitQuestionnaire = (data) => API.post('/questionnaire', data);
export const getQuestionnaires = () => API.get('/questionnaire');
export const simulateDigitalTwin = (data) => API.post('/ai/simulate', data);

export default API;
