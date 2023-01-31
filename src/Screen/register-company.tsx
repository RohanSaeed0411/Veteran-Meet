
import React, { useState } from "react"
import "./Login.css"

import { useNavigate } from "react-router-dom";

const RegisterCompany = function () {

  const [companyName, setCompanyName] = useState("");
  const [owner, setOwner] = useState("");

  let navigate = useNavigate();

  const handleRegister = (evt: any) => {
      evt.preventDefault();

      navigate("/home");

  }
  return (
    <div >
      <h1 className="heading">Veteran Meet</h1>
    <div className="body">
    <div className="box">
      <h1>Register Company</h1>
          <form onSubmit={handleRegister}>
      <label>
        companyName:
        <input
          type="text"
          value={companyName}
          onChange={e => setCompanyName(e.target.value)}
        />
      </label>
      <label>
        Owner:
        <input
          type="text"
          value={owner}
          onChange={e => setOwner(e.target.value)}
        />
      </label>
      <br/>
      <input type="submit" value="Register" className="btn"/>
    </form>
    </div>
    </div>
    </div>
  );
}

 export default RegisterCompany;