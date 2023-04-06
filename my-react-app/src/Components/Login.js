import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react'; 
import { UserContext }  from '../Hooks/UserContext'

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [registerUser, setRegisterUser] = useState({
    firstname : "",
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

  
let {userId, setUserId} = useContext(UserContext);


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
        console.log("login succeed", data.token, data.user_id)
        localStorage.setItem("token", data.token);
        console.log(data.user_id)
        setUserId(data.user_id)
        console.log(userId)
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
    <>
      <input
        value={credentials.username}
        onChange={handleLoginChange}
        name="username"
        type="text"
        className="form-control mb-2"
        placeholder="Username"
      />
      <input
        value={credentials.password}
        onChange={handleLoginChange}
        name="password"
        type="password"
        className="form-control mb-2"
        placeholder="Password"
      />
      <button className="btn btn-primary" onClick={login}>
        Log in
      </button>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Sign up
      </button>
      <div>
      
        <div
          class="modal fade"
          id="exampleModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
          
        >
         
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label  class="form-label">
                    Name
                  </label>
                  <input
                    value={registerUser.firstname}
                    type="name"
                    class="form-control"
                    onChange={handleRegisterChange}
                    name="firstname"
                    id="nameSign"
                    
                  />
                </div>
                <div class="mb-3">
                  <label  class="form-label">
                  LastName
                  </label>
                  <input
                     value={registerUser.lastname}
                    type="name"
                    class="form-control"
                    onChange={handleRegisterChange}
                    name="lastname"
                    id="lastNameSign"
                    
                  />
                </div>
                <div class="mb-3">
                  <label  class="form-label">
                   Username
                  </label>
                  <input
                    value={registerUser.username}
                    type="name"
                    class="form-control"
                    onChange={handleRegisterChange}
                    name="username"
                    id="userNameSign"
                    
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">
                    Password
                  </label>
                  <input
                    value={registerUser.password}
                    type="password"
                    class="form-control"
                    onChange={handleRegisterChange}
                    name="password"
                    id="passwordSign"
                   
                  />
                </div>
                <div class="mb-3">
                  <label  class="form-label">
                    Email address
                  </label>
                  <input
                   value={registerUser.email}
                    type="email"
                    class="form-control"
                    onChange={handleRegisterChange}
                    name="email"
                    id="emailSign"
                    
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
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
    </>
  );
}

export default Login;
