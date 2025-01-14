import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { AuthContext } from "../context"
import auth from "../database/firebaseConfig"


function AuthProvider({ children }) {


  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const singin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const authInfo = {
    creatUser,
    singin,
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