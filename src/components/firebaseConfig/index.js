import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyCbOeq4utaVChA7xtLex_NUvXaVUrzdJtE",
        authDomain: "react-task-add1f.firebaseapp.com",
        databaseURL: "https://react-task-add1f-default-rtdb.firebaseio.com",
        projectId: "react-task-add1f",
        storageBucket: "react-task-add1f.appspot.com",
        messagingSenderId: "923245924607",
        appId: "1:923245924607:web:a267c003853ab6933dbcca"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    return getDatabase(app);
}

export default StartFirebase;
