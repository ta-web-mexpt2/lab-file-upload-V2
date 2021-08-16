import React from "react"
import axios from "axios"
import {useState} from 'react'


const CreatePost = () => {
    const [img,setImg] = useState(null)

    const submitPost = e => {
        e.preventDefault()

        const title = e.target[0].value
        const body = e.target[1].value

        axios.post('http://localhost:3001/api/post/create', {
            title, body, image: img
        }).then((data) =>{

        }).catch(err => console.error(err))

        
        
    }

    const handleUploadPhoto = e =>{
        //form data
        const data = new FormData()
        data.append('img', e.target.files[0])

        axios.post('http://localhost:3001/upload-image', data)
        .then(({data: {url}}) =>{
            setImg(url)
        })
        .catch(err => console.error(err))
    }
    return (
        <div>
            <form onSubmit= {submitPost}>
                <input type="text" name="title" id="title" placeholder="title"/>  
                <br/>
                <input type="text" name="title" id="title" placeholder="title"/>  
                <input type="file" name="img" id="img" onChange={handleUploadPhoto}/>
                <button type='submit' >create post</button>
                </form>
        </div>
    )
}

export default CreatePost