// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQbsJZMYem1wML-SFowa2ezDRDYJXu5g4",
  authDomain: "bistro-boss-authenticati-9e905.firebaseapp.com",
  projectId: "bistro-boss-authenticati-9e905",
  storageBucket: "bistro-boss-authenticati-9e905.appspot.com",
  messagingSenderId: "824547961552",
  appId: "1:824547961552:web:adfb03d3330cf4508d4cd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;