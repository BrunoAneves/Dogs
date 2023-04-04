import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [userName, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://www.dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "applicarion/json",
      },
      body: JSON.stringify({ userName, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={({ target }) => setUsername(target.value)}
        ></input>
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        ></input>
        <button>Entrar</button>
      </form>
      <Link to="/login/criar">Cadrastro</Link>
    </section>
  );
};

export default LoginForm;
