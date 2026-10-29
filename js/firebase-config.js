import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBaqg9Dm2wP9aLYWXCUe8aCa4MmK6m7Gfo",
  authDomain: "agenda-lash-108f1.firebaseapp.com",
  projectId: "agenda-lash-108f1",
  storageBucket: "agenda-lash-108f1.firebasestorage.app",
  messagingSenderId: "365416735872",
  appId: "1:365416735872:web:e4b3adb06a096ab4a2f265"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)