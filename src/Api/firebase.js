import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyC2KtSbw3C_j2ynaAycuOqkcjW7ACbtNKs",
  authDomain: "parcel-management-5610b.firebaseapp.com",
  projectId: "parcel-management-5610b",
  storageBucket: "parcel-management-5610b.firebasestorage.app",
  messagingSenderId: "815695649765",
  appId: "1:815695649765:web:4094e0a302460f6f1ded0c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { app, db }