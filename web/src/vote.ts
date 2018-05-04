import { firestore } from "firebase";
import "firebase/firestore";
import { IUser } from "./types/user";
const COLLECTION = "questions";
// import { store } from "./redux/store";

const store = () => {
  const settings = {/* your settings... */ timestampsInSnapshots: true };
  const db = firestore();
  db.settings(settings);
  return db;
}

const USERS = "users";
export const createUserDoc = (user: IUser) => () => {
  if (!user.id) { return; }
  store().collection(USERS).doc(user.id).set(user)
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}

export const loadUser = (user: IUser) => () => {
  if (!user.id) { return; }
  store().collection(USERS).doc(user.id).get()
  .then((qs) => {
    console.log(qs.data());

    // qs.forEach(foo => {
    //   console.log("foo", foo);

    // })
  })
  .catch((error) => {
    console.error("Error writing document: ", error);
  });
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
  return store()
    .collection(COLLECTION)
    .where("name", "==", "testfrage")
    .get();
}