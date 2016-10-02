# beacon-cordova
A starting template for creating cordova apps with beacon interactions

## Getting started
This tutorial shows how to create and build native mobile apps in Javascript, HTML and CSS using the [Apache Cordova](https://cordova.apache.org/) build system. This project contains the code for a simple starting template with the necessary setup already added for creating native iBeacon apps in Android and IOS. So lets start by setting up the Cordova build system, or you can skip ahead to the Evothings section for an easier build/start step.

## Setup
There is two main ways you can build and play around with the template in a IOS or Android. You can either install cordova and get it to run the template nativly on your phone, or you can use the Evothings ecosystem which allows you to install and run your up through their system on your phone. You can of course use both. We recommend using the Evothings ecosystem as it allows for a quicker workflow. You must use Cordova nativly if you want to publish you app.

### Cordova
1. Install Cordova:
  - `npm install -g cordova`
2. Install mobile platforms you with to develop on by following the guide on the following sites. It should also be possible to run the app in the emulator if wanted:
  - [IOS](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html)
  - [Andoird](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html)
3. You can check if the installation finished correctly by using the following command:
  - `cordova requirements`
4. You build the code with
  - `cordova build <platform name>`
5. You can run and build the code with
  - `cordova run android`

### Evothings ecosystem
Evothings is a mobile platform enabler for building internet of things (IoT) applications. The system contains two main parts, a mobile app and the Evothings studio. The Evothings studio works as a server and the mobile app as the viewer. Your code is served by the Evothigns studio and runned on the mobile apps connected to the studio. When your code is changed and the Evothings studio detects the changes the mobile app viewer is automaticly refreshed with the code changes. The Evothings studio should alleredy be installed on your machine. The mobile app can found at:
  - Android: https://play.google.com/store/apps/details?id=com.evothings.evothingsviewer
  - IOS: https://itunes.apple.com/se/app/evothings-viewer/id1029452707?mt=8

##### Using Evothings:
  - Start Evothings Studio.
  - Launch Evothings App on your mobile
  - Get a connect code in the Studio by clicking "Get Code" under the "Connect" tab.
  - Input the connect code in the mobile app
  - In the studio change the tab to "Examples" and push run on the Hello World app. You should now see the the Hello World app running on your mobile.
  - To insert your own app into the Studio. Change the tab to "My Apps" and drag and drop your application (this template www/ folder) into the tab. You should now be able to run your app through the studio.

## Installation
  - Change the directory into the www/ folder. Here is the HTML, CSS and Javascript code for the application
    - `cd www/`
  - Install the dependecies:
    - `npm install`  
  - Transpile the Javascript code with:
    - `gulp build`
  - You can set the system to automaticly build changes by using:
    - `gulp watch`

## API

### Beacon Ranging

### Beacon monitoring

### Mobile notifictions
