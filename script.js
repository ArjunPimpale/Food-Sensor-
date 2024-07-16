// Replace with your actual ThingSpeak Channel ID and Read API Key
const channelId = '2599999';
const apiKey = 'SX2MQRH2IHLWECII';

// Function to fetch sensor data from ThingSpeak API
async function fetchSensorData() {
  const url = 'https://api.thingspeak.com/channels/2599999/feeds.json?api_key=SX2MQRH2IHLWECII&results=1';

  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data)
    let phsensor = data.feeds[0].field1;
    let Color = data.feeds[0].field2;
    let Turb = data.feeds[0].field3;
    let methane = data.feeds[0].field4;
    let alcohol = data.feeds[0].field5;

    document.querySelector("#phsensor").innerHTML = `${phsensor}`
    document.querySelector("#colorsensor").innerHTML = `${Color}`
    document.querySelector("#turbidity").innerHTML = `${Turb}`
    document.querySelector("#methane").innerHTML = `${methane}`
    document.querySelector("#alcohol").innerHTML = `${alcohol}`

    console.log(data.feeds[0].field2)
    
    // console.log("Sensor value:", data.field1); // Access the sensor value from the response
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function to fetch data
fetchSensorData();
