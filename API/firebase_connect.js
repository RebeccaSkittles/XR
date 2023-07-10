  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAONC8JHE1VoLPLdAoMV8Ey37SzkAd63Ow",
    authDomain: "xr-development-api.firebaseapp.com",
    projectId: "xr-development-api",
    storageBucket: "xr-development-api.appspot.com",
    messagingSenderId: "281110749044",
    appId: "1:281110749044:web:4ff778c30ec8c11983d621",
    measurementId: "G-WK975DF17W"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
