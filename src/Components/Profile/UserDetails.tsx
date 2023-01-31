import React from "react";
import "./UserDetails.css";

import { User } from "../../Data/EventsMockData";

function UserDetails(props: any) {
  const user: User = props.user;
  return (
    <div className="details">
      <img src={require("../../assets/images/profile.jpg")} className="user-img" />
      <div
        style={{
          marginLeft: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <b style={{ fontSize: 24 }}>{"Name: " + user.userName}</b>
        <small style={{ marginTop: 8, fontSize: 24 }}>
          {"Age: " + user.age}
        </small>
        <small style={{ fontSize: 24 }}>{"Company: " + user.company}</small>
      </div>
    </div>
  );
}

export default UserDetails;
