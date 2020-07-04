import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { postLogin } from "../services/users";

const AuthForm = (props) => {
  const history = useHistory();

  const [state, setState] = useState({});

  const handleChange = (e) => {
    // En los eventos sintéticos, es necesario almacenar los valores pues en las acciones asíncronas, no se tendrá el valor en el event
    // https://reactjs.org/docs/events.html#event-pooling
    const key = e.target.name;
    const val = e.target.value;
    setState((prevState) => ({
      ...prevState,
      [key]: val,
    }));
  };

  const login = (e) => {
    e.preventDefault();
    postLogin(state)
      .then((response) => {
        props.setUser(response.data);
        console.log("/");
        history.push("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="uk-section">
      <div className="uk-container uk-flex uk-flex-center">
        <div className="uk-width-1-4">
          <h3>Login</h3>
          <form onSubmit={login} className="uk-width-1-1 uk-form-stacked">
            <div className="uk-margin">
              <label className="uk-form-label uk-text-primary">Email:</label>
              <div className="uk-inline">
                <span
                  className="uk-form-icon uk-form-icon-flip"
                  uk-icon="icon: mail"
                ></span>
                <input
                  onChange={handleChange}
                  className="uk-input"
                  id="email"
                  name="email"
                  type="email"
                  required
                ></input>
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label uk-text-primary">Password:</label>
              <div className="uk-inline">
                <span
                  className="uk-form-icon uk-form-icon-flip"
                  uk-icon="icon: lock"
                ></span>
                <input
                  onChange={handleChange}
                  className="uk-input"
                  id="password"
                  name="password"
                  type="password"
                  required
                ></input>
              </div>
            </div>
            <button className="uk-button uk-button-primary">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
