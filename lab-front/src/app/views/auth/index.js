
import React,{useState} from "react";
import axios from 'axios'
import { Button, Flex ,Input} from '@chakra-ui/react'


function Auth() {

  const [data, setData] = useState({})


  const handleChange = (e) => {
              //Se usan arreglos para keys dinamicas
    setData({...data, [e.target.name] : e.target.value})
  }

  const onSubmit = (e) => {
    //Evitar que se recargue
    e.preventDefault()

    //Parsear para cambiar de JSON a MultiPart
    const formData = new FormData();

    for(let key in data){
      formData.append(key, data[key])
    }

    // append = Crea la siguiente estructura para los multipart:
    // [
    //   ["username", "Mauricio"],
    //   ["password", "moco123"],
    //   ["email", "carnitas@gmail.com"]
    // ]

    console.log("Format : ", formData, data)
    axios.post("http://localhost:3001/api/users/signup", formData)
    .then(res => console.log("La respuesta: ", res))
    .catch(error => console.log("El error: ", error))
  }


  const uploadFile = (e) => {
    console.log(e.target.files)
    setData({...data, avatar:e.target.files[0]})
  }
  return (
    <div className="App">
    <form className="form" onSubmit={onSubmit}>
      <input placeholder="username" type="text" name="username" onChange={handleChange}/>
      <input placeholder="email" type="text" name="email" onChange={handleChange}/>
      <input placeholder="password" type="text" name="password" onChange={handleChange}/>
      <input type="file" name="avatar" onChange={uploadFile}/>
      <button>Submit</button>
      </form>
    </div>
  );
}



export default Auth;
