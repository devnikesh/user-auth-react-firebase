import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase-config.js";

function useAuth() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  async function signUp(email, password, name) {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((response) => {
      sessionStorage.setItem(
        "Auth Token",
        response._tokenResponse.refreshToken
      );
    });

    const user = userCredential.user;

    // Update the user's display name
    await updateProfile(user, {
      displayName: name,
    });
  }

  async function logIn(email, password) {
    const auth = getAuth(app);
    await signInWithEmailAndPassword(auth, email, password).then((response) => {
      sessionStorage.setItem(
        "Auth Token",
        response._tokenResponse.refreshToken
      );
    });
  }

  async function logOut() {
    const auth = getAuth(app);
    await signOut(auth);
  }

  async function resetPassword(email) {
    const auth = getAuth(app);
    await sendPasswordResetEmail(auth, email);
  }

  return {
    currentUser,
    loading,
    signUp,
    logIn,
    logOut,
    resetPassword,
  };
}

export default useAuth;
