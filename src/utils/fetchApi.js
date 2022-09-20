import axios from "axios";
import { apiKey } from './apiKey'; 



const baseUrl = 'https://youtube-v31.p.rapidapi.com'

//url parameters and headers
const options = {
     params: {  
       maxResults: '50'
     },
     headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
     }
};

export const fetchApi = async (url) => {
     const { data } =  await axios.get(`${baseUrl}/${url}`, options);
     return data;
}