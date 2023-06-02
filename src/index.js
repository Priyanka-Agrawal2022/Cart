import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZRgHetiQNEOblt-S0wfkoFt-uoS8jFlQ",
  authDomain: "cart-7069f.firebaseapp.com",
  projectId: "cart-7069f",
  storageBucket: "cart-7069f.appspot.com",
  messagingSenderId: "319128549800",
  appId: "1:319128549800:web:3e3c726db01dde19cf059d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);