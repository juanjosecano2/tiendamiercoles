
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDw022Lhq3nv1WjhSOCaVPxMJQnV5kP-ns",
    authDomain: "prana-95bb8.firebaseapp.com",
    projectId: "prana-95bb8",
    storageBucket: "prana-95bb8.appspot.com",
    messagingSenderId: "824701960841",
    appId: "1:824701960841:web:5bb7cdff68738d4f18bc58",
    measurementId: "G-65EXLRJX5D"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
