// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV2hToBzLb0ZqByyUATg71VlSHPo8iOeY",
  authDomain: "ecommerce-website-41141.firebaseapp.com",
  projectId: "ecommerce-website-41141",
  storageBucket: "ecommerce-website-41141.appspot.com",
  messagingSenderId: "989520119112",
  appId: "1:989520119112:web:e7b1a4ba647ff184941f7d",
  measurementId: "G-QZYTN6DDYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
