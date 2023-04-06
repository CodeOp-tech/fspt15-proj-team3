import React from "react";
import { useContext } from 'react'; 
import {UserContext}  from '../Hooks/UserContext'



function Home() {

  let {userId} = useContext(UserContext);

const startReminders = async () => {
  try {
    let id = userId
    let options = {
      method: "POST",
      headers: {
      "Content-Type": "application/json"},
    }
    let results = await fetch(`/reminders-start/${id}`, options)
    let notification = await results.json();
    console.log(notification.message)
    }
    catch (error) {
    console.log(error)
  } 
};

const stopReminders = async () => {
  try {
    let options = {
      method: "POST",
      headers: {
      "Content-Type": "application/json"},
    }
    let results = await fetch("/reminders-stop", options)
    let notification = await results.json();
    console.log(notification.message)
    }
    catch (error) {
    console.log(error)
  } 
};

  return (
    <div className="App">

      <p> Home Page </p>
      
      <button onClick={startReminders}> Start Reminders </button>
      <button onClick={stopReminders}> Stop Reminders </button>


    </div>
  )
}
export default Home;
