// Replace with your actual ThingSpeak Channel ID and Read API Key
const channelId = '2599999';
const apiKey = 'SX2MQRH2IHLWECII';

// Function to fetch sensor data from ThingSpeak API
async function fetchSensorData() {
  const url = 'https://api.thingspeak.com/channels/2599999/fields/1.json?api_key=SX2MQRH2IHLWECII&results=2';

  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data)
    console.log(data.feeds[0].field1)
    // console.log("Sensor value:", data.field1); // Access the sensor value from the response
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function to fetch data
fetchSensorData();
