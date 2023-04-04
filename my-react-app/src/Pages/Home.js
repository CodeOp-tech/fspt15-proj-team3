import React from "react";

const setReminders = async () => {
  try {
    let results = await fetch("/reminders-start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let notification = await results.json();
    console.log(notification)
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
