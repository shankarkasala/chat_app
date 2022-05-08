import React, { useState } from "react";
import Input from "./Input";
import { Link } from "react-router-dom";
import "./Register.css";
function Register() {
  const [input, setInput] = useState({
    email: "Enter Email...",
    username: "Enter Username...",
    password: "Enter Password...",
  });
  return (
    <div className="login-form">
      <div className="login-container">
        <div className="login-header">
          <h1>Create Account !!</h1>
        </div>
        <div className="login-fields">
          <label>EMAIL :</label>
          <Input
            inputtype={"email"}
            inputvalue={input.email}
            setinput={(e) => setInput(e.target.value)}
          />
          <label>USER NAME :</label>
          <Input
            inputtype={"text"}
            inputvalue={input.username}
            setinput={(e) => setInput(e.target.value)}
          />
          <label>PASSWORD :</label>
          <Input inputtype={"password"} inputvalue={input.password} />
          <button>Register</button>
          <p>
            already exists account ?{" "}
            <Link className="link-color" to="/">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
