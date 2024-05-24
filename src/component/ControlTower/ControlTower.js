import React from 'react';
import axios from 'axios';

const ControlTower = () => {
  const BLYNK_AUTH_TOKEN = "sfFPUbi2sLZj0dGPweoxCl0JR9uEiT-v";
  const BLYNK_TEMPLATE_ID = "TMPL3es6NMUGL";

  const turnDeviceOn = async () => {
    try {
      // Send a command to turn on the device using Blynk's API
      const response = await axios.get(`https://blynk.cloud/external/api/update/${BLYNK_AUTH_TOKEN}/${BLYNK_TEMPLATE_ID}/pin/V1?value=1`);
      console.log('Response from Blynk:', response.data);
    } catch (error) {
      console.error('Error turning device on:', error);
    }
  };

  const turnDeviceOff = async () => {
    try {
      // Send a command to turn off the device using Blynk's API
      const response = await axios.get(`https://blynk.cloud/external/api/update/${BLYNK_AUTH_TOKEN}/${BLYNK_TEMPLATE_ID}/pin/V1?value=0`);
      console.log('Response from Blynk:', response.data);
    } catch (error) {
      console.error('Error turning device off:', error);
    }
  };

  return (
    <div>
      <h1>Control Tower</h1>
      <button onClick={turnDeviceOn}>Turn On</button>
      <button onClick={turnDeviceOff}>Turn Off</button>
    </div>
  );
};

export default ControlTower;
