import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreatePost from './components/CreatePost'
import axios from 'axios'
import  {useState, useEffect } from 'react'

function App() {

  
     const [posts, setPosts] = useState(null)
     useEffect(() => {
      function getPosts(){
       axios
       .get('http://localhost:3001/api/post/all')
       .then(({data: {posts}}) =>{
           setPosts(posts)
         }
       )
    

     }
     getPosts()
   }, [])


  return (
    <div className="App">
      <CreatePost/>
      {posts?.map(posts => <div key={posts._id}>

        <h4>{posts.title}</h4>
        <p>{posts.body}</p>
        <img src={posts.image} width='200px'/>
        </div>)}
    </div>
  );
}

export default App;
