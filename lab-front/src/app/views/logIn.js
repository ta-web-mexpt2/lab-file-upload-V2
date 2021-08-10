
import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router";
import {loginEndpoint, signupEndpoint} from '../services/users-ws';

function LogIn () {
    const [data,setData] = useState({})
    const history = useHistory();
    const handleChange = (e)=>{
      setData({...data,[e.target.name]:e.target.value })
    }
  
    const onSubmit = (e) => {
      e.preventDefault()
      /*
      axios.post("http://localhost:3001/api/users",formData)
      .then(response=> console.log("la respuesta",response))
      .catch(error=> console.log("la error",error))
      */
      loginEndpoint(data)
        .then( res => {
            localStorage.setItem("data",JSON.stringify(res.data.result))
            history.push('/home')
        })
        .catch()
    }

    return (
        <form onSubmit={onSubmit} style={{
            display:'flex',
            flexDirection:'column'
          }}>
            <input placeholder="email" type="text" name="email" onChange={handleChange}/>
            <input placeholder="password" type="text" name="password" onChange={handleChange}/>
            <button>login</button>
        </form>
    )
}

export default LogIn