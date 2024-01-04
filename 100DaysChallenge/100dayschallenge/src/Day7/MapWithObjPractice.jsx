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

const mappedWeeklyTasks = Object.keys(weeklyTasks).map((day) => {
  const dailyTasks = weeklyTasks[day];
//   console.log(`Day: ${day}`);
  const tasksList = Object.keys(dailyTasks).map((timeOfDay) => {
    {time : 'timeOfDay'}
    // time: timeOfDay,
    //   task: dailyTasks[timeOfDay],
 
  });
});

const MapWithObj = () => {
  return (
    <>
     
    </>
  );
};
export default MapWithObj;
