
import React, { useState } from "react"
import "./Login.css"

import { useNavigate } from "react-router-dom";


const RegisterCompany = function () {

  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState( { currentTime: new Date().toLocaleString() });

  let navigate = useNavigate();

  const handleAddEvent = (evt: any) => {
      evt.preventDefault();

      navigate("/home");

  }
  return (
    <div >
      <h1 className="heading">Veteran Meet</h1>
    <div className="body">
    <div className="box">
      <h1>Register Company</h1>
          <form onSubmit={handleAddEvent}>
      <label>
        EventName:
        <input
          type="text"
          value={eventName}
          onChange={e => setEventName(e.target.value)}
        />
      </label>
      <label>
        Event Date:
  
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