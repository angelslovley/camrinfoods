import { initializeApp } from "firebase/app"
import { getFirestore, serverTimestamp } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp(
    {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId
    }
);

 export const firestore = getFirestore(firebaseApp)
 export const auth = getAuth(firebaseApp)
export const storage = getStorage(firebaseApp)
 export const db={
    pizzas:'allProducts',
    
    formatedDoc:doc=>{
      return{id:doc.id,...doc.data()}
    },
    getCurrentTimeStamp:serverTimestamp,
  }