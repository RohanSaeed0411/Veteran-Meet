
import React, { useState } from "react"
import "./Login.css"

import { useNavigate } from "react-router-dom";

const Login = function () {

  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handlLogin = (evt: any) => {
      evt.preventDefault();

      navigate("/home");

  }
  const handleSignUp = (evt: any) => {
    evt.preventDefault();

    navigate("/register");

}
  return (
    <div className="body">
       <h1 className="heading">Veteran Meet</h1>
      <div className="box">
       
        <div >
        <h1>Sign In</h1>
        <form onSubmit={handlLogin}>
          <label>
            Username:
            <input
            type="text"
            value={userName}
            onChange={e => setuserName(e.target.value)}
          />
          </label>
          <br/>
          <label>
            Password:
          <input
            type="text"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          </label>
          <br/>
          <input type="submit" value="Login" className="btn"/>
          <br/>
          <br/>
        </form>
        <form onSubmit= {handleSignUp}>
          <p>Donot have account</p>
          <input type="submit" value="SignUp" className="btn"/>
        </form>
      </div>
    </div>
  </div>
  );
}

 export default Login;