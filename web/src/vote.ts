import { firestore } from "firebase";
import "firebase/firestore";
const COLLECTION = "questions";
// import { store } from "./redux/store";

const store = () => {
  const settings = {/* your settings... */ timestampsInSnapshots: true };
  const db = firestore();
  db.settings(settings);
  return db;
}

export const vote = () => {
  console.log("vote");

  // store().collection(COLLECTION).add({
  //   name: "Ada",
  //   vote: "yes"
  // })
  //   .then((docRef) => {
  //     console.log("Document written with ID: ", docRef.id);
  //   })
  //   .catch((error) => {
  //     console.error("Error adding document: ", error);
  //   });
}

export const getVotes = () => {
  return store().collection(COLLECTION).get();
}