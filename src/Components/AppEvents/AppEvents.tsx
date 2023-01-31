import React, { useEffect, useState } from "react";
import "./AppEvents.css";

import logo from "../../logo.svg";
import EventsButton from "./EventsButton";
import { Event, events, status, User } from "../../Data/EventsMockData";
import userStore from "../../State Management/UserState";

import { AiFillStar, AiOutlineCheckCircle } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { RiShareForwardFill } from "react-icons/ri";

function setStatusEvent(event: Event, user: User) {
  let userStatus = "";
  event.intrestedPeople.forEach((item) => {
    if (item === user.userName) {
      userStatus = status.intrested;
      return;
    }
  });
  if (userStatus === "") {
    event.notIntrestedPeople.forEach((item) => {
      if (item === user.userName) {
        userStatus = status.notIntrested;
        return;
      }
    });
  }
  if (userStatus === "") {
    event.GoingPeople.forEach((item) => {
      if (item === user.userName) {
        userStatus = status.going;
        return;
      }
    });
  }

  return userStatus;
}

function AppEvents(props: any) {
  const { user, setUser } = userStore();
  const [userStatus, setUserStatus] = useState("");
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const event: Event = props.event;
  useEffect(() => {
    setUserStatus(setStatusEvent(event, user!));
  }, []);
  return (
    <div className="Container">
      <img src={require("../../assets/images/event.png")} className="img" />
      <div className="Event-details">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginRight: 32,
          }}
        >
          <b style={{ color: "red", fontSize: 24 }}>
            {month[event.eventDate.getMonth()]}
          </b>
          <small style={{ fontSize: 28 }}>{event.eventDate.getDate()}</small>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <b style={{ fontSize: 24 }}>{event.eventName}</b>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <small style={{ fontSize: 18, opacity: 0.5, marginRight: 8 }}>
              Public.{" "}
            </small>
            <small style={{ fontSize: 18, opacity: 0.5, marginRight: 8 }}>
              Hosted by
            </small>
            {event.organizingCompanies.length > 0 &&
              event.organizingCompanies.map((item) => (
                <div>
                  <small style={{ fontSize: 18, opacity: 0.8, marginRight: 6 }}>
                    {item}
                  </small>
                  {item !=
                    event.organizingCompanies[
                      event.organizingCompanies.length - 1
                    ] && (
                    <small
                      style={{ fontSize: 18, opacity: 0.5, marginRight: 6 }}
                    >
                      and
                    </small>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
      <p style={{ marginLeft: 24, fontWeight: "bold" }}>
        {event.eventDescription}
      </p>
      <div className="Event-details">
        <EventsButton
          color={userStatus === status.intrested ? "blue" : "black"}
          icon={
            <AiFillStar
              size={18}
              style={{
                color: userStatus === status.intrested ? "blue" : "black",
              }}
            />
          }
          text={status.intrested}
          onPress={() => {
            if (userStatus === status.intrested) {
              setUserStatus("");
              const index = event.intrestedPeople.indexOf(user?.userName ?? "");
              if (index > -1) {
                // only splice array when item is found
                event.intrestedPeople.splice(index, 1); // 2nd parameter means remove one item only
              }
              //event.GoingPeople.pop(user?.userName);
            } else {
              setUserStatus(status.intrested);
              event.intrestedPeople.push(user?.userName ?? "");
            }
            console.log("press");
          }}
        />
        <EventsButton
          color={userStatus === status.notIntrested ? "blue" : "black"}
          icon={
            <RxCrossCircled
              size={18}
              style={{
                color: userStatus === status.notIntrested ? "blue" : "black",
              }}
            />
          }
          text={status.notIntrested}
          onPress={() => {
            if (userStatus === status.notIntrested) {
              setUserStatus("");
              const index = event.notIntrestedPeople.indexOf(
                user?.userName ?? ""
              );
              if (index > -1) {
                // only splice array when item is found
                event.notIntrestedPeople.splice(index, 1); // 2nd parameter means remove one item only
              }
              //event.GoingPeople.pop(user?.userName);
            } else {
              setUserStatus(status.notIntrested);
              event.notIntrestedPeople.push(user?.userName ?? "");
            }
          }}
        />
        <EventsButton
          color={userStatus === status.going ? "blue" : "black"}
          icon={
            <AiOutlineCheckCircle
              size={18}
              style={{ color: userStatus === status.going ? "blue" : "black" }}
            />
          }
          text={status.going}
          onPress={() => {
            if (userStatus === status.going) {
              setUserStatus("");
              const index = event.GoingPeople.indexOf(user?.userName ?? "");
              if (index > -1) {
                // only splice array when item is found
                event.GoingPeople.splice(index, 1); // 2nd parameter means remove one item only
              }
              //event.GoingPeople.pop(user?.userName);
            } else {
              setUserStatus(status.going);
              event.GoingPeople.push(user?.userName ?? "");
            }
          }}
        />
        <div style={{ flex: 1 }} />
        {props.isFromProfileScreen === undefined && (
          <EventsButton
            color={"black"}
            icon={<RiShareForwardFill size={18} style={{ color: "black" }} />}
            text={"Share"}
            onPress={() => {
              //TODO: add share functionality
              //user.sharedEventIds.push(event.eventId);
              if (user === null) {
                return;
              }
              const temp: User = user;
              temp.sharedEventIds.push(event.eventId);
              setUser(temp);

              alert("Shared to your profile!");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default AppEvents;
