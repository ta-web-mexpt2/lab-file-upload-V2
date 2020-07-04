import axios from "axios";

// Atención a cómo se manda el header en postUser
export const postUser = (data) => (
    axios.post("http://localhost:3000/api/users/signup", data, { headers: { "Conten-Type": "multipart/form-data" } })
);

export const postLogin = (credentials) => (
    axios.post("http://localhost:3000/api/users/login", credentials)
);