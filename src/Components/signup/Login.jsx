import React, { useState } from "react";
import Input from "./Input";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  const [input, setInput] = useState({
    email: "Enter Email...",
    password: "Enter Password...",
  });
  return (
    <div className="login-form">
      <div className="login-container">
        <div className="login-header">
          <h1>Welcome back !</h1>
          <h6>we're excited to see you again!!</h6>
        </div>
        <div className="login-fields">
          <label>EMAIL :</label>
          <Input
            inputtype={"email"}
            inputvalue={input.email}
            setinput={(e) => setInput(e.target.value)}
          />
          <label>PASSWORD :</label>
          <Input inputtype={"password"} inputvalue={input.password} />
          <button>Login</button>
          <p>
            need an account ?{" "}
            <Link className="link-color" to="/register">
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
