// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbvbTqpEx2DN6FbfiFUczUDZY-bbtsy3Y",
  authDomain: "planner-3c0d2.firebaseapp.com",
  projectId: "planner-3c0d2",
  storageBucket: "planner-3c0d2.appspot.com",
  messagingSenderId: "908468449763",
  appId: "1:908468449763:web:dadc0ec9157de8775e70d6",
  measurementId: "G-987BLBS9Y1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
const analytics = getAnalytics(app);