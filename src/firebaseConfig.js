
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyADwgV1eHi-xfcpalmk-aBE4wIIAqbtAtw",
    authDomain: "roleauth3.firebaseapp.com",
    projectId: "roleauth3",
    storageBucket: "roleauth3.appspot.com",
    messagingSenderId: "901417754584",
    appId: "1:901417754584:web:39ac5201998ee6eec85cad",
    //measurementId: "G-1Y1MNL6E7B"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;
export { app };