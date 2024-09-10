import React from "react";
import axios from "axios";
import { setAuthToken } from "../helpers/setAuthToken"
import UserService from "../services/UserService";
function Login() {

  const handleSubmit = (username, password) => {

    //reqres registered sample user
    const loginPayload = {
      username: "jesusman22",
      password: "jacksonlu"
    }

    axios.post("http://localhost:8080/login", loginPayload)
      .then(response => {
        //get token from response
        const token = response.data.token;

        //set JWT token to local
        localStorage.setItem("token", token);

        //set token to axios common header
        setAuthToken(token);

        //redirect user to home page
        window.location.href = '/'

      })
      .catch(err => console.log(err));
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        const [username, password] = event.target.children;
        handleSubmit(username, password);
      }}
    >
      <label for="username">Username</label><br />
      <input type="username" id="username" name="username"/><br />
      <label for="password">Password</label><br />
      <input type="password" id="password" name="password"/><br></br>
      <input type="submit" value="Submit" />
    </form>
  );
}
export default Login