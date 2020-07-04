import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import InputField from "./InputField";
import { postUser } from "../services/users";

const UserRegistration = () => {
  const [state, setState] = useState({});
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(state);
    // Se crea el objeto FormData que maneja todo lo que se va a enviar en la petición, recordar que NO ES UN OBJETO
    const formData = new FormData();
    // Se arma el objeto, "copiando" lo que está en state pero a un tipo llave:valor
    for(let key in state) {
        // Para las imágenes, se saca del arreglo
        if(key === "avatar") {
            // Forma de sacar los archvios del tipo FileList
            for(let file of Array.from(state[key])) {
                formData.append(key, file);
                console.log(file);
            }
        } else {
            formData.append(key, state[key]);
        }
    };
    // Atención a cómo se manda el header en postUser
    postUser(formData).then(response => {
        console.log(response.data);
        history.push("/");
    })
  };

  const changeHandler = (e) => {
    const key = e.target.name;
    const value = e.target.files || e.target.value;
    setState((prevState) => ({ ...prevState, [key]: value }));
    console.log(state);
  };

  return (
    <section>
      <div className="uk-flex uk-flex-center uk-child-width-1-2">
        <form onSubmit={(e) => submitHandler(e)}>
          <InputField
            name="username"
            placeholder="Username..."
            onChange={changeHandler}
          />
          <InputField
            name="email"
            placeholder="Email..."
            onChange={changeHandler}
          />
          <InputField
            name="password"
            type="password"
            onChange={changeHandler}
          />
          <InputField
            name="avatar"
            type="file"
            onChange={changeHandler}
          />
          <button className="uk-button">Send</button>
        </form>
      </div>
    </section>
  );
};

export default UserRegistration;