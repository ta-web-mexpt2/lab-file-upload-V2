import axios from "axios";
import React,{useState} from "react";
import { Button, Flex } from '@chakra-ui/react'

const Post = () => {
const [img,setImg] = useState(null)


const submitPost = e => {
e.preventDefault()


const post = {title: e.target[0].value, body:e.target[1].value, img}
console.log(post)
const formData = new FormData()
for (let key in post ){
    formData.append(key,post[key])
}
axios.post('http://localhost:3001/api/posts/create',formData)
.then((data)=>{
console.log(data)
})
.catch(error => console.error(error))

}

const handleUpload = e => {
    console.log(e.target.files[0])
    setImg(e.target.files[0])
    //Hacemos el multipart en codigo
    //const data = new FormData()
                //se llama como en el back
   // data.append('img',e.target.files[0])

    /* axios.post('http://localhost:3001/api/posts/create',data)
    .then((res) =>{
        setImg(res.data.img)
        console.log(data)
    })
    .catch(error => console.error(error)) */
}

    return(
        <div>
            <form 
            direction = "column"
            width="400px"
            height= "50vh"
            justify="space-around"
            mt="100px"
            
            
            className="form" onSubmit={submitPost}>
                <input type="text" name="title" id="title" placeholder="title" />
                <br/>
                <input type="text" name="body" id="body" placeholder="body" />
                <input type="file" name="img" id="img" onChange={handleUpload}/>
                <button type="submit" >Create Post </button>
            </form>

        </div>
    )
}

export default Post;