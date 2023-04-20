import React from 'react';
import { createContext } from 'react';

import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext(null)


const auth = getAuth(app)

//providers
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const facebookProvider = new FacebookAuthProvider()

const AuthProviders = ({ children }) => {
      const [user, setUser] = useState('');
      const [loading, setLoading] = useState(true);
      //google sign in

      const handleGoogleSignIn = () => {
            signInWithPopup(auth, googleProvider)
                  .then(result => {
                        const user = result.user;

                        console.log(user);
                  }).catch(error => {
                        console.log(error.message);
                  })
      }


      //github sign in
      const handleGithubsignIn = () => {
            signInWithPopup(auth, githubProvider)
                  .then(result => {
                        const user = result.user;

                        console.log(user);

                  }).catch(error => {
                        console.log(error.message);
                  })
      }


      //facebook login
      const handleFacebookSignIn = () => {
            signInWithPopup(auth, facebookProvider)
                  .then(result => {
                        const user = result.user;

                        console.log(user);

                  }).catch(error => {
                        console.log(error.message);
                  })
      }

      //signOut

      const handleLogOut = () => {
            signOut(auth)
                  .then(() => {
                        setUser('')
                        console.log("successfully log out");
                  }).catch(error => {
                        console.log(error.message);
                  })
      }


      //sign up with email and password
      const emailSignUp=(email,password)=>{
            setLoading(true);
            return createUserWithEmailAndPassword(auth,email,password);
      }

      //sign in with email and password
      const signInEmail =(email,password)=>{
            setLoading(true);
            return signInWithEmailAndPassword(auth,email,password);
      }


      //set user Name
      const userName=(u,name)=>{
            return updateProfile(u,{
                  displayName: name
            })

      }

      //current user catch and unmount
      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                  if (currentUser) {
                        setUser(currentUser);
                  }

                  setLoading(false)
            })
            return () => {
                  return unsubscribe()
            }
      }, [])


      //auth info pass to other components
      const userInfo = {
            user,
            handleGoogleSignIn,
            handleLogOut,
            handleGithubsignIn,
            handleFacebookSignIn,
            emailSignUp,
            signInEmail,
            userName,
          
            loading
      }
      return (
            <AuthContext.Provider value={userInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProviders;