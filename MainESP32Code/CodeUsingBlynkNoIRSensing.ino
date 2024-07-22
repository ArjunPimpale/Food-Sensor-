#include "SensorManager.h"

SensorManager sensorManager;

void setup() {
    sensorManager.begin();
}

void loop() {
  //  sensorManager.readSensors();
  //  delay(100);
    sensorManager.sendToThingSpeak();
    delay(5000);  // Wait for a minute before reading again
}
