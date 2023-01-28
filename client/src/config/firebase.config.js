import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVB_-XRFQiLmAN76GuDwWs8Umh7L5zdug",
  authDomain: "music-player-6f840.firebaseapp.com",
  projectId: "music-player-6f840",
  storageBucket: "music-player-6f840.appspot.com",
  messagingSenderId: "1068260930249",
  appId: "1:1068260930249:web:6b5a3ee855a4876775d318",
};

// Initialize Firebase

// If another our app already has been initialized as a firebase app then
// then get the previous app or else initialize our app as a firbase app.
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);

// This will connect our react app to our firebase storage
const storage = getStorage(app);

// This is allow us to access the login methods we have enabled
const auth = getAuth(app);

// Accessing the google authentication
const provider = new GoogleAuthProvider();

export { app, storage, auth, provider };
