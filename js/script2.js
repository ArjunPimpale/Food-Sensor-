// Replace 'YOUR_WRITE_API_KEY' with your actual write API key
const apiKey = '61LHP61JLXWUTXVC';

// Replace these with the values you want to write to the channel
const field7Value = 0; // Example value for field1
const field8Value = 16; // Example value for field2

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
