import React, { useEffect, useState } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom'; // Para tener acceso al path, history, etc.
import TumblrCard from './Components/tmblrCard';
import {getPosts} from './services/posts';

function App() {
  const [userPosts, setUserPosts] = useState([]);
  
  useEffect(() => {
    // Carga los datos iniciales, todos los post del usuario
    getPosts().then(posts => {
      console.log(posts.data);
      setUserPosts(posts.data);
    })
  }, [])

  return (
    <div className="App">
      <div style={{display: "flex", alignItems: "flex-start", flexWrap: "wrap", margin: "20px"}}>
        {userPosts.map(post => (
          <TumblrCard key={post._id} username={post.creatorId.username} avatar={post.creatorId.avatar} 
          content={post.content}
          picPath={post.picPath}
          notes={post.notes || Math.floor(Math.random()*1000) } />
        ))}
      </div>
    </div>
  );
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;
