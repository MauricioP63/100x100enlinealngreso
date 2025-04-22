// Firebase configuration and initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4mtrvuQmiIsCMfyzpJrcx2TrRVkseK_U",
  authDomain: "readthis-79471.firebaseapp.com",
  projectId: "readthis-79471",
  storageBucket: "readthis-79471.firebasestorage.app",
  messagingSenderId: "870196818367",
  appId: "1:870196818367:web:cf49f252131e641e94b10a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
