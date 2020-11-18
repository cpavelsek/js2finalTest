import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB16JRjx_0ThLYz1b517IpnT4T83dgRW4w",
    authDomain: "test-project-74767.firebaseapp.com",
    databaseURL: "https://test-project-74767.firebaseio.com",
    projectId: "test-project-74767",
    storageBucket: "test-project-74767.appspot.com",
    messagingSenderId: "304875346682",
    appId: "1:304875346682:web:d77a998d93586042b8c743"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
// We'll need to explore using other components of firebase
// Note that we are just exporting the firsestore database
