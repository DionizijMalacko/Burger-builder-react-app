import axios from "axios";

const instance = axios.create({
    baseURL: 'https://react-my-burger-d68da-default-rtdb.firebaseio.com/'
});

export default instance;