import React from "react";
import { Pie } from "react-chartjs-2";

export default function Analytics({ streetLights }) {
  // Count working and not working street lights
  const workingCount = streetLights.filter(light => light.workingStatus === "Working").length;
  const notWorkingCount = streetLights.filter(light => light.workingStatus === "Not Working").length;
  const totalCount = streetLights.length;

  // Data for the pie chart
  const data = {
    labels: ["Working", "Not Working"],
    datasets: [
      {
        data: [workingCount, notWorkingCount],
        backgroundColor: ["green", "red"]
      }
    ]
  };

  return (
    <div>
      <h2>Street Light Analytics</h2>
      <Pie data={data} />
      <p>Total Street Lights: {totalCount}</p>
    </div>
  );
}
