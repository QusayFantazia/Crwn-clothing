import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA9YmKFG5jZSh8zaHoJHXnDYqBHyrG8uDY",
    authDomain: "crwn-clothing-21c8e.firebaseapp.com",
    databaseURL: "https://crwn-clothing-21c8e.firebaseio.com",
    projectId: "crwn-clothing-21c8e",
    storageBucket: "crwn-clothing-21c8e.appspot.com",
    messagingSenderId: "115740822513",
    appId: "1:115740822513:web:bc3084afbedcab336f1250"
}

firebase.initializeApp(config);

export const createuserProfileDocument = async (userAuth, otherData) => {
    if (!userAuth) {
        return;
    }
    const objectRef = await firestore.doc(`/users/${userAuth.uid}`)

    const snapshot = await objectRef.get();



    if (!snapshot.exists) {

        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await objectRef.set({
                displayName,
                email,
                createdAt,
                ...otherData

            })
        }
        catch (error) {
            console.log("error creating user" + error)
        }

    }
    return objectRef

}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ Prompt: 'select Account ' })
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;