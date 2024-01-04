import React from "react";
const weeklyTasks = {
  Monday: {
    morning: "Gym",
    afternoon: "Team Meeting",
    evening: "Coding Practice",
  },
  Tuesday: {
    morning: "Yoga",
    afternoon: "Client Calls",
    evening: "Project Planning",
  },
  Wednesday: {
    morning: "Running",
    afternoon: "Code Review",
    evening: "Learning Session",
  },
  Thursday: {
    morning: "Gym",
    afternoon: "Client Meetings",
    evening: "Personal Projects",
  },
  Friday: {
    morning: "Yoga",
    afternoon: "Team Collaboration",
    evening: "Project Development",
  },
};


export default function DayMonth(){
    
    return(
        <>
            {Object.keys(weeklyTasks).map((day)=>(
                <h1>{day}</h1>
                

            ))}
        </>
    )
}
