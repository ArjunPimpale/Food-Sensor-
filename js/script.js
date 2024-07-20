const button = document.querySelector(".left").getElementsByTagName("button")[0];
button.addEventListener('click', () => {
    // Replace with your actual ThingSpeak Channel ID and Read API Key
    const channelId = '2602469';
    const apiKey = '61LHP61JLXWUTXVC';
  
    // Function to fetch sensor data from ThingSpeak API
    async function fetchSensorData() {
      nosleep()
      const read = `https://api.thingspeak.com/channels/${channelId}/feeds.json?api_key=${apiKey}&results=1`;
      const write = `https://api.thingspeak.com/update?api_key=61LHP61JLXWUTXVC&field1=0 `

      try {
        const response = await fetch(read);
        
        const data = await response.json();
        let phsensor = data.feeds[0].field1;
        let color = data.feeds[0].field2;
        let turb = data.feeds[0].field3;
        let methane = data.feeds[0].field4;
        let alcohol = data.feeds[0].field5;
        
        document.querySelector("#turbidity").innerHTML = `${turb}`;
        document.querySelector("#phsensor").innerHTML = `${phsensor}`;
        document.querySelector("#colorsensor").innerHTML = `${color}`;
        document.querySelector("#methane").innerHTML = `${methane}`;
        document.querySelector("#alcohol").innerHTML = `${alcohol}`;
        
       
        const response2 = await fetch(write);
        const wrdata = await response2.json();
        console.log(wrdata)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

  
    // Fetch data every 15 seconds
    setInterval(fetchSensorData, 5000);
  
    // Initial call to fetch data immediately when the page loads
    fetchSensorData();
  });

  // Replace 'YOUR_WRITE_API_KEY' with your actual write API key
const apiKey = '61LHP61JLXWUTXVC';

// Replace these with the values you want to write to the channel
const field7Value = 1; // Example value for field1
const field8Value = 16; // Example value for field2



function nosleep(){
  
  const url = 'https://api.thingspeak.com/update.json';
  
  const data = {
    api_key: apiKey,
    field7: field7Value,
    field8: field8Value
  };
  
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}


