import auth from "../firebaseConfig/firebase.config";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../../Hook/useAxiosPublic/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser ] = useState(null);
  const [loding, setLoding] = useState(false);
  const axiosPublic = useAxiosPublic();

  console.log(user?.email)  

  const googleProvider = new GoogleAuthProvider();

  const singUpUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const singInUser = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo 
    })
  }

  const googleSingUp = () => {
    return signInWithPopup (auth, googleProvider);
  }

  const logOut = () => {
    setLoding(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if(currentUser) {
        // call jwt
        const userInfo = {email: currentUser.email};
        axiosPublic.post("/jwt", userInfo)
        .then(res => {
          if(res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        })
      }
      else{
        localStorage.removeItem("access-token");
      }

      setLoding(false);
    })
    return () => {
      return unSubscribe()
    }
  }, []);

  const authInfo = {
    user,
    singUpUser,
    singInUser,
    updateUserProfile,  
    googleSingUp,
    logOut,
    loding,
  }

  return(
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;