import React, { useEffect, useState,useRef } from "react";
import AppEvents from "../../Components/AppEvents/AppEvents";
import UserDetails from "../../Components/Profile/UserDetails";
import { events, User, Event } from "../../Data/EventsMockData";
import "./ProfileScreen.css";
import userStore from "../../State Management/UserState";
import defaultStyle from '../../Config/styles'
import Navbar from "../../Navigation";

function fetchSharedEvents(sharedEventIds: String[]) {
    console.log('share: ',sharedEventIds);
  let result: Event[] = [];
  sharedEventIds.forEach((eventId) => {
    const eve = events.find((item) => item.eventId === eventId);
    console.log('eve: ',eve);
    if (eve !== undefined) {
      result.push(eve);
    }
  });
  console.log('res: ',result);
  return result;
}
function ProfileScreen(props: any) {

  const {user} = userStore();
 
  const [sharedEvents,setSharedEvents] = useState<Event[]>([])
  useEffect(() => {
    setSharedEvents(fetchSharedEvents(user?.sharedEventIds ?? []));
    console.log('user:: ',user);
  }, []);
  return (
    <div>
       <Navbar />
      <UserDetails user={user} />
      <div
        style={{
          backgroundColor: defaultStyle.colors.grey400,
          paddingTop: 8,
          paddingBottom: 8,
        }}
      >
        {sharedEvents.map((event) => (
          <AppEvents event={event} isFromProfileScreen={true}/>
        ))}
      </div>
    </div>
  );
}

export default ProfileScreen;
function userRef() {
  throw new Error("Function not implemented.");
}

