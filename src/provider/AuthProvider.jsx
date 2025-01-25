import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { AuthContext } from "../context"
import auth from "../database/firebaseConfig"
import { useEffect, useState } from "react"
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const singin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signinWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      } else {
        setUser(null)
      }
    });

    return () => {
      unsubscribe()
    }
  }, [])


  const logOut = () => {
    return signOut(auth)
  }

  const authInfo = {
    user,
    creatUser,
    singin,
    logOut,
    signinWithGoogle,
  }
  return (
    <>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export default AuthProvider