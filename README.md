# Restaurant Search
## What is this?
This is a very simple React Native application that shows restaurant results for searchable food types.
Implementation stack consists of [React Navigation 5](https://reactnavigation.org/), [Axios](https://github.com/axios/axios), and the [Yelp! API](https://www.yelp.com/developers/), built using [Expo](https://expo.io/)

## How to use
This app is still very much in progress, so there are some features still to be finished/fleshed out (e.g. location services, app settings, etc), however if you want to use it yourself:
1. Register for a [Yelp! API developer key](https://www.yelp.com/developers/) - **search requests will fail unless you put the key in the [yelp.js](https://github.com/CoderMP/rn-restaurant-search/blob/master/src/api/yelp.js) file**
2. Use `npm start` or `expo start` in the project directory to run the application locally
  - If using Expo, make sure you have the corresponding Expo app installed on your physical device (Android or iOS) **or** you have set up Expo to recognize your device emulators.

## Upcoming Features
- Weekly calendar for open hours
- Restaurant category pills for the detail screen
- Location Services
- App Settings/Preferences
- Minor style fixes
