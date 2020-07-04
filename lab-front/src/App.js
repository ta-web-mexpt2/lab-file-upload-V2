import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import { withRouter } from "react-router-dom"; // Para tener acceso al path, history, etc.
import NavBar from "./Components/NavBar";
import Routes from "./Routes";
import { postPost, getPosts } from "./services/posts";

const AppContext = createContext();

function App() {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    // Carga los datos iniciales, todos los post del usuario
    getPosts().then((posts) => {
      setUserPosts(posts.data);
    });
  }, []);

  const [newPost, setNewPost] = useState({});
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.files || e.target.value;
    setNewPost((prevState) => ({ ...prevState, [key]: value }));
  };

  const createPost = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in newPost) {
      if (key === "picPath") {
        for (let file of Array.from(newPost[key])) {
          formData.append(key, file);
        }
      } else {
        formData.append(key, newPost[key]);
      }
    }
    postPost(formData).then(async (response) => {
      await setUserPosts((prevPosts) => [...prevPosts, response.data]);
    }).catch(error => console.log(error.toString()));
  };

  return (
    <AppContext.Provider value={{ setUser }}>
      <div className="App">
        <NavBar />
        <Routes user={user} setUser={setUser} posts={userPosts} />
        <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
          <div className="uk-offcanvas-bar">
            <button
              className="uk-offcanvas-close"
              type="button"
              uk-close="true"
            ></button>

            <h3>New Post</h3>
            <form onSubmit={createPost} className="uk-form-stacked">
              <div className="uk-margin">
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    id="content"
                    name="content"
                    type="text"
                    placeholder="Put you comment here..."
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="uk-margin">
                <div uk-form-custom="target: true">
                  <input
                    type="file"
                    id="picPath"
                    name="picPath"
                    onChange={handleChange}
                  />
                  <input
                    className="uk-input uk-form-width-medium"
                    type="text"
                    placeholder="Select file"
                    disabled
                  />
                </div>

                <div className="uk-margin">
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    id="picName"
                    name="picName"
                    type="text"
                    placeholder="Picture name..."
                    onChange={handleChange}
                  />
                </div>
              </div>
              </div>
              <div className="uk-margin">
                <button className="uk-button uk-button-default">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;
