import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyARe9xUirWamPqD0_0KYh13Z2LaOeo0MZ0",
    authDomain: "giftlist-a1013.firebaseapp.com",
    projectId: "giftlist-a1013",
    storageBucket: "giftlist-a1013.appspot.com",
    messagingSenderId: "494391462575",
    appId: "1:494391462575:web:e7b131a9cba718143da25a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
