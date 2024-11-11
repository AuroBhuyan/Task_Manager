// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "task-manager-25f61.firebaseapp.com",
  projectId: "task-manager-25f61",
  storageBucket: "task-manager-25f61.firebasestorage.app",
  messagingSenderId: "418206835012",
  appId: "1:418206835012:web:b2df9d4233b1fa5ce97711"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);