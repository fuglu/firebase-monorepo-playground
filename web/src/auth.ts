import { auth } from "firebase";
import { resetUser, updateUser } from "./redux/modules/user";
import { store } from "./redux/store";

export const initAuth = () => {
  handleAuthRedirect();
  handleAuthStateChange();
};

export const login = () => {
  // const provider = new auth.FacebookAuthProvider();
  const provider = new auth.GoogleAuthProvider();

  auth().signInWithRedirect(provider);
};

export const logout = () => {
  auth().signOut();
};

const handleAuthRedirect = () => {
  auth().getRedirectResult();
};

const handleAuthStateChange = () => {
  auth().onAuthStateChanged(user => {
    if (user) {
      const { uid, email, displayName, photoURL } = user;
      store.dispatch(
        updateUser({
          email,
          id: uid,
          isAuthenticated: true,
          name: displayName,
          photoURL
        })
      );
    } else {
      store.dispatch(resetUser());
    }
  });
};
