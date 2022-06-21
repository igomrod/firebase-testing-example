import { credential } from "firebase-admin";
import { initializeApp } from "firebase-admin/app";
import { Firestore, getFirestore } from "firebase-admin/firestore";

const PROJECT_ID = "fir-testing-example" // TODO get from conf or .firebaserc

export const initTestDB: () => Firestore = () => {
    require('dotenv').config() // having FIRESTORE_EMULATOR_HOST env var declared test will use the emulator
    
    const serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);
    
    // Initialize Firebase
    const app = initializeApp({
      credential: credential.cert(serviceAccount)
    });
    
    const db = getFirestore()
    
    return db
}


export const clearTestDB: () => Promise<void> = async () => {
  const url = `http://127.0.0.1:8080/emulator/v1/projects/${PROJECT_ID}/databases/(default)/documents`
  
  console.log(url)
  
  await fetch(url, 
    {
      method: 'DELETE'
    })
}
  
