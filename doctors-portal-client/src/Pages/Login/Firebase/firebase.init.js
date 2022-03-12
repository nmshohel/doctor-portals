import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase";


const initializeFirebase=()=>{
    initializeApp(firebaseConfig);

}
export default initializeFirebase;

