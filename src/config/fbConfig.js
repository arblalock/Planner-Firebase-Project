import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
var config = {
  apiKey: "AIzaSyBdtrBtoKwZ0lt1dknlJ2-_4JXuDvwadBs",
  authDomain: "mario-plan-97ea5.firebaseapp.com",
  databaseURL: "https://mario-plan-97ea5.firebaseio.com",
  projectId: "mario-plan-97ea5",
  storageBucket: "mario-plan-97ea5.appspot.com",
  messagingSenderId: "1099471051516"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;