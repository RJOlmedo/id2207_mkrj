import React from "react";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div>
        <h1>Login</h1>
        <p>Log in to an existing account using username and password</p>
        <LoginForm/>

        <h1>Create user</h1>
        <p>Contact IT for your credentials for accessing the system or creating an account.</p>
    </div>
  );
}
export default Login;