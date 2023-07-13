# Career Counselling Site

## Description

This project is an example application that utilizes Firebase for its backend functionality. It provides a simple setup process to get the project up and running.

## Installation

To install the project dependencies, run the following command:

```shell
npm install
```

## Firebase Configuration

To set up the Firebase configuration, follow these steps:

1. Obtain your Firebase configuration keys from the Firebase console.
2. Create a new file named `firebaseConfig.js` in the project directory.
3. Open the `firebaseConfig.js` file and add the following code:

```javascript
// firebaseConfig.js

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

export default firebaseConfig;
```

4. Replace the placeholder values (`YOUR_API_KEY`, `YOUR_AUTH_DOMAIN`, etc.) with your actual Firebase configuration values.

## Run

To start the project, run the following command:

```shell
npm start
```

This will start the development server and make the application accessible at `http://localhost:3000`.

## Additional Notes

- Make sure you have Node.js and npm installed on your system.
- Ensure that you have set up a Firebase project and obtained the necessary configuration keys before proceeding with the setup.

That's it! You should now be able to install the dependencies, set up the Firebase configuration, and run the project successfully. Feel free to modify and customize the application according to your needs. Enjoy!
