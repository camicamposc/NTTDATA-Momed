import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQxEVphCbPjCZIH8kZwyOae5mPQI-umUU",
  authDomain: "test-ntt-7675c.firebaseapp.com",
  projectId: "test-ntt-7675c",
  storageBucket: "test-ntt-7675c.appspot.com",
  messagingSenderId: "936230783355",
  appId: "1:936230783355:web:7a92aaed023852348395de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
