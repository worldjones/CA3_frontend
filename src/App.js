import React, { useState, useEffect } from "react";
import facade from "./apiFacade";
import Menu from "./Menu";
import Home from "./home";
import { Link, Route, Switch } from "react-router-dom";

function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onChange={onChange}>
        <input placeholder="User Name" id="username" />
        <input placeholder="Password" id="password" />
        <button className="button buttonIn" onClick={performLogin}>Login</button>
      </form>
    </div>
  );
}
function LoggedIn() {
  return (
    <div>
      <Menu />
    </div>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMes, setErrorMes] = useState("");

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };
  const login = (user, pass) => {
    facade.login(user, pass)
      .then((res) => {
        setLoggedIn(true);
      }).catch((error) => {
        error.fullError.then((err) => {
          setErrorMes(err.message);
        })
      })
  };

  return (
    <div>
      {!loggedIn ? (
        <div>
          <Home />
          <LogIn login={login} />
          <p>{errorMes}</p>
        </div>
      ) : (
          <div>
            <LoggedIn />
            <button className="button" onClick={logout}>Logout</button>
          </div>
        )}
    </div>
  );
}
export default App;
