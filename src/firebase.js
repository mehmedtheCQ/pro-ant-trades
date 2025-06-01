// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdcdU61PJy6t1lqO2N0-NESdgfoOwZfok",
  authDomain: "pro-ant-capital.firebaseapp.com",
  projectId: "pro-ant-capital",
  storageBucket: "pro-ant-capital.firebasestorage.app",
  messagingSenderId: "606107841702",
  appId: "1:606107841702:web:be3f34762e0824bf63b067",
  measurementId: "G-XNRRXQ3G83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;
