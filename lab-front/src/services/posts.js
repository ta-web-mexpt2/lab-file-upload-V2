import axios from 'axios';
axios.defaults.withCredentials = true;

export const getPosts = () => {
    return axios.get("http://localhost:3000/api/posts/index");
};

export const postPost = (data) => {
    return axios.post("http://localhost:3000/api/posts", data, { headers: { "Conten-Type": "multipart/form-data" } });
}