import axios from 'axios';
 
const _axios = axios.create({
  baseURL: 'http://localhost:3000/api',
  // withCredentials: true // => you might need this when having the users in the app 
});
 
const errorHandler = err => {
  // console.error(err);
  throw err;
};
 
export default {
  _axios,
 
  handleUploadPost (theFile) {
    // console.log('file in service: ', theFile)
    return _axios.post('/upload', theFile)
      .then(res => res.data)
      .catch(errorHandler);
  },
 
  addUser (user) {
    // console.log('new thing is: ', newThing)
    return _axios.post('/signup', user)
      .then(res => res.data)
      .catch(errorHandler);
  },

  addComment (comment) {
    // console.log('new thing is: ', newThing)
    return _axios.post('/comment', comment)
      .then(res => res.data)
      .catch(errorHandler);
  },

  addPost (post) {
    // console.log('new thing is: ', newThing)
    return _axios.post('/post', post)
      .then(res => res.data)
      .catch(errorHandler);
  }
}