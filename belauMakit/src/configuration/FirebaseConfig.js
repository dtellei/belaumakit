import * as firebase from 'firebase'
import 'firebase/firestore'

// find firebase info and fill out var items
var firebaseConfig = {
  apiKey: 'AIzaSyBc-_JhDFVgBVwQnu5_N3iHYCzASvqiNLE',
  authDomain: 'belau-makit-test.firebaseapp.com',
  projectId: 'belau-makit',
  storageBucket: 'belau-makit.appspot.com',
  messagingSenderId: '174036553680',
  appId: '1:174036553680:android:75b7bf447181588c26b3d5',
  databaseURL: '',
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export default firestore;
