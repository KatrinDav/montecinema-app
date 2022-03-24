import axios from "axios";

export const BASE_URL = 'http://localhost:3000';


export const getMovies = async () => {
  return await axios.get(`${BASE_URL}/movies`);
};

export const getScreenings = async () => {
  return await axios.get(`${BASE_URL}/seances`);
};

export const setLength = (inMinutes) => {
      const hours = Math.floor(inMinutes/60);
      const minutes = `${inMinutes%60}`;
      return `${hours}h ${minutes} min`
    }
