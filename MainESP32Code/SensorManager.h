#ifndef SENSORMANAGER_H
#define SENSORMANAGER_H

#include <Arduino.h>
#include <ArduinoHttpClient.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <Wire.h>
#include <IRremote.h>

// WiFi credentials (extern declarations)
extern const char* ssid;
extern const char* password;

// ThingSpeak API settings
extern const char* apiWriteKey;
extern const char* thingSpeakChannel;

// Define the analog pin for the MQ-4 sensor
const int mq4Pin = 34;  // GPIO 34 (Analog input pin)

// Define the analog pin for the pH sensor
const int phSensorPin = 35;  // GPIO 35 (Analog input pin)

// Define pins for the color sensor
#define S0 19
#define S1 18
#define S2 5
#define S3 17
#define sensorOut 4

// Calibration values for the color sensor
const int R_Min = 0;
const int R_Max = 425;
const int G_Min = 0;
const int G_Max = 472;
const int B_Min = 0;
const int B_Max = 449;

// Define pins and values for the IR remote
const int RECV_PIN = 14;  // GPIO pin connected to the IR receiver
extern const unsigned long BUTTON_0;
extern const unsigned long BUTTON_1;
extern const unsigned long BUTTON_2;
extern const unsigned long BUTTON_3;
extern const unsigned long BUTTON_4;
extern const unsigned long BUTTON_5;
extern const unsigned long BUTTON_6;
extern const unsigned long BUTTON_7;
extern const unsigned long BUTTON_8;
extern const unsigned long BUTTON_9;

class SensorManager {
public:
    SensorManager();
    void begin();
    void readSensors();
    void sendToThingSpeak();
    int handleRemoteInput(unsigned long code);
    void displayMenu();
    int codeToDigit(unsigned long code);

private:
    WiFiClient wifiClient;
    HttpClient client;
    IRrecv irrecv;
    decode_results results;
    float calibration_value;
    int buffer_arr[10];
    bool menuDisplayed;
    int firstDigit;
    int secondDigit;
    float readPHSensor();
    const char* readColorSensor();
    float readTurbiditySensor();
    float readMethaneSensor();
    float readAlcSensor();
    float calculatePHValue();
    int getRed();
    int getGreen();
    int getBlue();
    void handleChoice(int choice);
    int readIRInput();
  
};

#endif // SENSORMANAGER_H
