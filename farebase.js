/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { } from 'firebase/app-check';
import { } from 'firebase/auth';
import { } from 'firebase/compat';
import { getDatabase } from 'firebase/database';
import { } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: 'AIzaSyDNlg67HVVdlAebHYE8P-3B64z8R4D_Yhs',
     authDomain: 'bycode-7e4ac.firebaseapp.com',
     projectId: 'bycode-7e4ac',
     storageBucket: 'bycode-7e4ac.appspot.com',
     messagingSenderId: '87652293803',
     appId: '1:87652293803:web:cbba83912ad650721b2bee',
     measurementId: 'G-BWXRDJ2VR7',
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
const analytics = getAnalytics( app );
const daatbase = getDatabase( app );
export { analytics, daatbase };


