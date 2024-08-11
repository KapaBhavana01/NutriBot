import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAkt54Eg9I8qRqmpQKr2BbbGYkUiD0jXy8",
    authDomain: "nutrichat-79764.firebaseapp.com",
    projectId: "nutrichat-79764",
    storageBucket: "nutrichat-79764.appspot.com",
    messagingSenderId: "446518284448",
    appId: "1:446518284448:web:aa8e190f00dd13b57439c5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);