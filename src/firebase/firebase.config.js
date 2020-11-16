import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import Signin from '../component/signin/signin.component';

const config = {
  apiKey: "AIzaSyDy88KV8bV1Ynf2iO3cq-KqsC1tq_7yu4c",
  authDomain: "react-crown-db-a5dbc.firebaseapp.com",
  databaseURL: "https://react-crown-db-a5dbc.firebaseio.com",
  projectId: "react-crown-db-a5dbc",
  storageBucket: "react-crown-db-a5dbc.appspot.com",
  messagingSenderId: "231230877102",
  appId: "1:231230877102:web:5aef0948a11ff2a8b1ac3f",
  measurementId: "G-SP48XQC2Z1"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})

export const signinGoogle = () => auth.signInWithPopup(provider);

export default firebase;

