import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getDatabase } from "firebase/database";

// Initialize Firebase
const app = firebase.initializeApp({
    apiKey: "AIzaSyCbOeq4utaVChA7xtLex_NUvXaVUrzdJtE",
        authDomain: "react-task-add1f.firebaseapp.com",
        databaseURL: "https://react-task-add1f-default-rtdb.firebaseio.com",
        projectId: "react-task-add1f",
        storageBucket: "react-task-add1f.appspot.com",
        messagingSenderId: "923245924607",
        appId: "1:923245924607:web:a267c003853ab6933dbcca"
});

function StartFirebase() {
    return getDatabase(app);
}

export const auth = app.auth();

export default StartFirebase;
