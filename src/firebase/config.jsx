import Firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDNlAWUTzFGaXG8ZZRUZrodxH0BYkwbuBc",
    authDomain: "olxdemo-1167a.firebaseapp.com",
    projectId: "olxdemo-1167a",
    storageBucket: "olxdemo-1167a.appspot.com",
    messagingSenderId: "124875699801",
    appId: "1:124875699801:web:8f0cc443cbffb5cdf66348",
    measurementId: "G-6JVRR95WK8"
  };

  export default Firebase.initializeApp(firebaseConfig)