import axios from 'axios';

export const getPosts = () => {
    return axios.get("http://localhost:3000/api/posts/index");
};