// document.addEventListener('DOMContentLoaded', () => {
  // Replace with your actual ThingSpeak Channel ID and Read API Key
  const channelId = '2599999';
  const apiKey = 'SX2MQRH2IHLWECII';

  // Function to fetch sensor data from ThingSpeak API
  async function fetchSensorData() {
    const url = `https://blynk.cloud/external/api/getAll?token=J5sf8xbUSsCBJ6Ron8pnFReQvb04G_F8`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      let phsensor = data.v1;
      let color = data.v3;
      let turb = data.v0;
      let methane = data.v32;
      let alcohol = data.v2;

      document.querySelector("#turbidity").innerHTML = `${turb}`;
      document.querySelector("#phsensor").innerHTML = `${phsensor}`;
      document.querySelector("#colorsensor").innerHTML = `${color}`;
      document.querySelector("#methane").innerHTML = `${methane}`;
      document.querySelector("#alcohol").innerHTML = `${alcohol}`;

      console.log(data.v0);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Fetch data every 15 seconds
  setInterval(fetchSensorData, 500);

  // Initial call to fetch data immediately when the page loads
  fetchSensorData();
// });