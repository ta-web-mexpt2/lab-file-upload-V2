
import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router";
import {postEndpoint} from '../services/posts-ws';

function Home () {
    const [data,setData] = useState({})
    const handleChange = (e)=>{
      setData({...data,[e.target.name]:e.target.value })
    }
  
    const onSubmit = (e) => {
      e.preventDefault()
  
      const formData = new FormData();
  
      for(let key in data){
        formData.append(key, data[key])
      }

      /*
      axios.post("http://localhost:3001/api/users",formData)
      .then(response=> console.log("la respuesta",response))
      .catch(error=> console.log("la error",error))
      */
      postEndpoint(formData)
        .then( res => {
            localStorage.setItem("data",JSON.stringify(res.data.result))
        })
        .catch()
    }
    
  
    const uploadFile = (e) => {
      setData({...data, picPath:e.target.files[0]})
    }

    return (
        <section>
            <h1>Post</h1>
            <form onSubmit={onSubmit} style={{
                display:'flex',
                flexDirection:'column'
            }}>
                <input placeholder="content" type="text" name="content" onChange={handleChange}/>
                <input placeholder="picName" type="text" name="picName" onChange={handleChange}/>
                <input  type="file"  name="picPath" onChange={uploadFile}/>
                <button>post</button>
            </form>

        </section>
    )
}

export default Home