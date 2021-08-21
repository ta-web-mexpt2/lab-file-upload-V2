
import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router";
import {loginEndpoint, signupEndpoint} from '../services/users-ws';

function SignUp () {
    const [data,setData] = useState({})
    const history = useHistory();
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
      signupEndpoint(formData)
        .then( res => {
            localStorage.setItem("data",JSON.stringify(res.data.result))
            history.push('/login')
        })
        .catch()
    }
  
  
    const uploadFile = (e) => {
      setData({...data, avatar:e.target.files[0]})
    }

    return (
        <form onSubmit={onSubmit} style={{
            display:'flex',
            flexDirection:'column'
          }}>
    
            <input placeholder="Username" type="text" name="username" onChange={handleChange}/>
            <input placeholder="email" type="text" name="email" onChange={handleChange}/>
            <input placeholder="password" type="text" name="password" onChange={handleChange}/>
            <input  type="file"  name="avatar" onChange={uploadFile}/>
            <button>sign up</button>
        </form>
    )
}

export default SignUp