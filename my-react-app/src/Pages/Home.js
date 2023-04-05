import React from "react";

const setReminders = async () => {
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


function Home() {
  return (
    <div className="App">

      <p> Home Page </p>
      
      <button onClick={setReminders}> Reminders </button>


    </div>
  )
}
export default Home;
