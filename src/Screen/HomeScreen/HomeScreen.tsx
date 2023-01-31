import React, { useEffect, useState } from 'react';
import './HomeScreen.css'

import AppEvents from '../../Components/AppEvents/AppEvents';
import Screen from '../../Components/Screen';
import {events,Event} from '../../Data/EventsMockData'
import Navbar from '../../Navigation';
function HomeScreen() {
    const [appEvents,setAppEvents] = useState<Event[]>([])
    useEffect(()=>{
        setAppEvents(events);
    },[]);
    return (
        <div className='Event'>
             <Navbar />
       { appEvents.map(event=>(
        <AppEvents event={event}/>
       ))}
        </div>
    );
}

export default HomeScreen;