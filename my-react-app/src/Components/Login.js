import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(props) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const navigate = useNavigate();

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
        console.log("login succeed")
        localStorage.setItem("token", data.token);
        navigate("/dashboard")
        
        
     
      }
    } catch (error) {
      console.log(error)
    }
  };

  

  return (<>
    
  
        <input
          value={credentials.username}
          onChange={handleChange}
          name="username"
          type="text"
          className="form-control mb-2"
          placeholder="Username"
        /> 
        <input
          value={credentials.password}
          onChange={handleChange}
          name="password"
          type="password"
          className="form-control mb-2"
          placeholder="Password"
        />
        <button className="btn btn-primary" onClick={login}>
          Log in
        </button>


 
    </>
  );
}

export default Login;