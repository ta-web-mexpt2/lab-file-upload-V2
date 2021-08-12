import React,{useState,useEffect} from 'react';
import Post from '../../components/Post';
import axios from 'axios'


function PostWall (){
    const [posts,setPosts] = useState(null)
useEffect(()=> {
  function getPosts(){
      axios.get('http://localhost:3001/api/posts/all')
      .then(
        ({data : {posts}}) => {
          setPosts(posts)
        }
      )
  }
  getPosts()
},[])

function addPost(post){
  setPosts([...posts,post])
}
    return (
    <div className="post">
      <Post addPost={addPost}/>
      {posts?.map(post => <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <img src={post.img} width='200px'/>
      </div>)}
      </div>

    )
}

export default PostWall;