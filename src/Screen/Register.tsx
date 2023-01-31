import React, {  useState } from "react";
import "./Login.css";

import { User } from "../Data/EventsMockData";

import { useNavigate } from "react-router-dom";

import userStore from "../State Management/UserState";

const Register = function () {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const {
    setUser
  } = userStore();
  const [company, setCompany] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    const res: User = {
      userId: "123",
      userName: userName,
      age: Number(age),
      company: company,
      intrestedEventsId: [],
      notIntrestedEventsId: [],
      goingEventsId: [],
      sharedEventIds: [],
      password: password,
    };
    setUser(res);
    navigate("/home");
  };
  return (
    <div className="body">
      <h1 className="heading">Veteran Meet</h1>
      <div >
        <div className="box">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Full Name:
              <input
                className="input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Age:
              <input
                className="input"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <br />
            <label>
              Company:
              <input
                className="input"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </label>
            <br />

            <label>
              ProgilePicture:
              <input
                className="input"
                type="file"
                name="myImage"
                onChange={(event) => {
                  if (event.target.files)
                    setSelectedImage(event.target.files[0]);
                }}
              />
            </label>
            <br />

            <label>
              UserName:
              <input
                className="input"
                type="text"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
              />
            </label>
            <br />

            <label>
              Password:
              <input
                className="input"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <input type="submit" value="Register" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
