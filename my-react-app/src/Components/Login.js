import React, { useState } from "react";
import loginimg from "../Illustrations/moshing.png";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Hooks/UserContext";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [registerUser, setRegisterUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterUser({ ...registerUser, [name]: value });
  };

  const handleSubmit = (event) => {
    register();
  };

  let { userId, setUserId } = useContext(UserContext);

  //user registered
  const login = async () => {
    try {
      let options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      };
      const result = await fetch("/api/users/login", options);
      const data = await result.json();
      if (!result.ok) setError(data.error);
      else {
        //store token locally
        console.log("login succeed", data.token, data.user_id);
        localStorage.setItem("token", data.token);
        console.log(data.user_id);
        setUserId(data.user_id);
        console.log(userId);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //create new user
  const register = async () => {
    try {
      let options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerUser),
      };
      const result = await fetch("/api/users/register", options);
      const data = await result.json();
      if (!result.ok) setError(data.error);
      else {
        console.log("user register succeed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-login">
      <h4 className="nameapp">BreakTime</h4>
      <div className="flex">
        <img className="loginimg" src={loginimg} />
        <div className="texts">
          <h1 className="h1login">Log in / Sign Up Now </h1>
          <h3 className="h3login">Find balance in your life. </h3>

          <input
            value={credentials.username}
            onChange={handleLoginChange}
            name="username"
            type="text"
            className="form-control mb-4 inputlogin"
            placeholder="Username"
          />
          <input
            value={credentials.password}
            onChange={handleLoginChange}
            name="password"
            type="password"
            className="form-control mb-4 inputlogin"
            placeholder="Password"
          />

          <button className="btn btn-primary loginbtn" onClick={login}>
            Log in
          </button>
        </div>
      </div>

      <div className="container-signup">
        <h5 className="h5login">Not a user yet? </h5>
        <button
          type="button"
          className="btn btn-primary signupbtn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Sign up
        </button>
      </div>
      <Link to="/dashboard">
        <a className="alogin">Skip for now</a>
      </Link>

      <div>
        <div
          className="modal fade"
          id="exampleModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    value={registerUser.firstname}
                    type="name"
                    className="form-control"
                    onChange={handleRegisterChange}
                    name="firstname"
                    id="nameSign"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    value={registerUser.lastname}
                    type="name"
                    className="form-control"
                    onChange={handleRegisterChange}
                    name="lastname"
                    id="lastNameSign"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    value={registerUser.username}
                    type="name"
                    className="form-control"
                    onChange={handleRegisterChange}
                    name="username"
                    id="userNameSign"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    value={registerUser.password}
                    type="password"
                    className="form-control"
                    onChange={handleRegisterChange}
                    name="password"
                    id="passwordSign"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    value={registerUser.email}
                    type="email"
                    className="form-control"
                    onChange={handleRegisterChange}
                    name="email"
                    id="emailSign"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleSubmit}
                  data-bs-dismiss="modal"
                >
                  Create Acount
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
