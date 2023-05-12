// services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://season-app-hbxam.ondigitalocean.app',
});

export default api;
