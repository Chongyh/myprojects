    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDfwqhFGkmrkl-Mt1I-R3hF9bViuMDRZDc",
      authDomain: "sample-project-56611.firebaseapp.com",
      projectId: "sample-project-56611",
      storageBucket: "sample-project-56611.appspot.com",
      messagingSenderId: "557568458189",
      appId: "1:557568458189:web:989fb79e9183ccb7f65884",
      measurementId: "G-EMT8Q69TZV"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
