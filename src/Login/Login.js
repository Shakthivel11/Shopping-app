import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const user = {
    username: "sakthi@gmail.com",
    password: "sakthi123",
  };
  const [username, setUserName] = useState(false);
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [passError, setPassError] = useState("");

  const handleUser = (event) => {
    let useremail = event.target.value;
    if (useremail !== user.username) {
      setNameError("Enter correct email");
      setUserName(false);
      // setDisabled(!passError)
    } else {
      setUserName(true);
      setNameError("");
  
    }
  };
  const handlePass = (event) => {
    let password = event.target.value;
    console.log(password);
    if (password !== user.password) {
      setPassError("Enter Password");
      setPassword(false);
      setNameError()
    } else {
      setPassword(true);
    
    }
  };

  const navigate = useNavigate();

  function saveCredentials(user, pass) {
    localStorage.setItem("Username", user);
    localStorage.setItem("Password", pass);
  }

  return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          if (username && password) {
            navigate("/productpage");
          }
        }}
      >
        <div className="content">
          <h3 className="title">Login</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              id="username"
              type="email"
              required=""
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={handleUser}
            />
            <label>{nameError}</label>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
            id="inputpassword"
              type="password"
              required=""
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={handlePass}
            />
            <label>{passError}</label>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary"
           
            onClick={()=>{
              console.log(document.getElementById("username"));
              saveCredentials(
                document.getElementById("username").value,
                document.getElementById("inputpassword").value
              )
            }}>
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="/">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
