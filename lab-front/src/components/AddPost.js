import React, { Component } from "react";
import _axios  from "../services/api";
 
 
class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
          content: "",
          creatorId: "",
          picName: "",
          picUrl:""
        };
    }
    
    handleChange = e => {  
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
 
    // this method handles just the file upload
    handleFileUpload = e => {
        console.log("The file to be uploaded is: ", e.target.files[0]);
 
        const uploadData = new FormData();
        // imageUrl => this name has to be the same as in the model since we pass
        // req.body to .create() method when creating a new thing in '/api/things/create' POST route
        uploadData.append("picUrl", e.target.files[0]);
        
        _axios.handleUpload(uploadData)
        .then(response => {
            // console.log('response is: ', response);
            // after the console.log we can see that response carries 'secure_url' which we can use to update the state 
            this.setState({ picUrl: response.secure_url });
          })
          .catch(err => {
            console.log("Error while uploading the file: ", err);
          });
    }
 
    // this method submits the form
    handleSubmit = e => {
        e.preventDefault();
        _axios.addPost(this.state)
        .then(res => {
            console.log('added: ', res);
            // here you would redirect to some other page 
        })
        .catch(err => {
            console.log("Error while adding the thing: ", err);
        });
    }  
    
    render() {
        return (
          <div>
            <h2>New Post</h2>
            <form onSubmit={e => this.handleSubmit(e)}>
                <label>Content</label>
                <input 
                    type="text" 
                    name="content" 
                    value={ this.state.content } 
                    onChange={ e => this.handleChange(e)} />
                <label>Image title</label>
                <input 
                    type="text" 
                    name="picName" 
                    value={ this.state.picName } 
                    onChange={ e => this.handleChange(e)} />
                <input 
                    type="file" 
                    onChange={(e) => this.handleFileUpload(e)} /> 
                <button type="submit">Save</button>
            </form>
          </div>
        );
    }
}
 
export default AddPost;