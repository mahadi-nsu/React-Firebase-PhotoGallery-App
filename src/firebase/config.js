import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD-NUkVNQu3V8uLB5K15hW6DvOAoEec5L8",
    authDomain: "ninja-firegram-60772.firebaseapp.com",
    databaseURL: "https://ninja-firegram-60772.firebaseio.com",
    projectId: "ninja-firegram-60772",
    storageBucket: "ninja-firegram-60772.appspot.com",
    messagingSenderId: "754152039170",
    appId: "1:754152039170:web:d244f82529ed0ecdfb981b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirebase = firebase.firestore();

export { projectStorage, projectFirebase };