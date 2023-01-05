import axios from 'axios';

const instance = axios.create({
    baseURL: "https://maps.googleapis.com/maps/api/"
})

export default instance