// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBaZJN95eIrowK570P0JxA0VW0QF2boPgo',
  authDomain: 'shop-ecom-8acb2.firebaseapp.com',
  projectId: 'shop-ecom-8acb2',
  storageBucket: 'shop-ecom-8acb2.firebasestorage.app',
  messagingSenderId: '512405065035',
  appId: '1:512405065035:web:1eff4e593378da7280ecce',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
