import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyDaHPRa0pnKRPpplK7whku19aLHIzWs2SE",
  authDomain: "snappybox-68e3d.firebaseapp.com",
  projectId: "snappybox-68e3d",
  storageBucket: "snappybox-68e3d.appspot.com",
  messagingSenderId: "381587075030",
  appId: "1:381587075030:web:25ce8dc02aa63db5067e77"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage=getStorage();
export const db=getFirestore();