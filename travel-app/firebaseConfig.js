// Import the functions you need from the SDKs you need
import firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALZs5xbicECy514KgZ-riVcWkRWrC49bA",
  authDomain: "travel-app-f59d9.firebaseapp.com",
  projectId: "travel-app-f59d9",
  storageBucket: "travel-app-f59d9.appspot.com",
  messagingSenderId: "735259666475",
  appId: "1:735259666475:web:15e882566ea4cccadba26e",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
