import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


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

export const createUserProfileDocument = async (userAuth, etc) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get();

  if(!snapshot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...etc
      })
    }catch(err){
        console.log(err);
    }

  }
  return userRef;
}

export const addCollectionAndDocs = async (collectionKey, addedObject)=>{
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  addedObject.forEach(obj =>{
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef,obj)
  })

  return await batch.commit()
}

export const convertSnapshotToMap = (collections) => {
  const transformCollection = collections.docs.map(doc => {
    const {title,items} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformCollection.reduce((accumulator,collection)=>{
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  },{})
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})

export const signinGoogle = () => auth.signInWithPopup(provider);

export default firebase;

