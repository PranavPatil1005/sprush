// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyAxOjvGN4pUfcpXE5jetMjRrjMgIkKhdIs",
 authDomain: "sprush-5d865.firebaseapp.com",
 projectId: "sprush-5d865",
 storageBucket: "sprush-5d865.firebasestorage.app",
 messagingSenderId: "140125454425",
 appId: "1:140125454425:web:44d4d4e756597ebf8db148",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Setup Auth and Google Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };