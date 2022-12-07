// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcud0ps2Ub0LxRiSE08T2RABJs6f-CnEI",
  authDomain: "coinapp-f1304.firebaseapp.com",
  databaseURL: "https://coinapp-f1304-default-rtdb.firebaseio.com",
  projectId: "coinapp-f1304",
  storageBucket: "coinapp-f1304.appspot.com",
  messagingSenderId: "162668383923",
  appId: "1:162668383923:web:ab04dcacd28b7507eb2ac6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth  = getAuth(app)

export {auth}