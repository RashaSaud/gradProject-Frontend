import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from 'firebase/storage';

import "firebase/storage";


const firebaseConfig = {

    apiKey: "AIzaSyDKaifn_fGSZCMQOJwaIQDalKe0nBbRx4o",
    authDomain: "gradproject-c2839.firebaseapp.com",
    projectId: "gradproject-c2839",
    storageBucket: "gradproject-c2839.appspot.com",
    messagingSenderId: "547967277456",
    appId: "1:547967277456:web:ef9a380e2b103679b9fb15"
  };


  const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export {  app,storage };