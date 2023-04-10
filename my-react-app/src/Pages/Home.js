import React from "react";

const startReminders = async () => {
  try {
    let options = {
      method: "POST",
      headers: {
      "Content-Type": "application/json"},
    }
    let results = await fetch("/reminders-start", options)
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


function Home() {
  return (
    <div className="App">

      <p> Home Page </p>
      
      <button onClick={startReminders}> Start Reminders </button>
      <button onClick={stopReminders}> Stop Reminders </button>


    </div>
  )
}
export default Home;
