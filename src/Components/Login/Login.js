import React, { useContext } from 'react';
import { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
// import { UserContext } from '../../App';

import { useHistory ,useLocation} from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    }
const Login = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        isSignedIn: false,
        email: ''
        
    })
    var provider = new firebase.auth.GoogleAuthProvider();
    const handleSignin = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            const { displayName ,photoURL ,email} = res.user;
            const SignedInuser = {
                isSignedIn: true,
                email: email
            }
            setLoggedInUser(SignedInuser)
            setUser(SignedInuser)
            console.log(displayName,photoURL,email)
            history.replace(from);
           
        })
      
    }
    return (
        <>
          <Header/>
        <div class="d-flex justify-content-center" style={{textAlign:'center'}}>
          
            <p>login please</p>
            <button onClick={handleSignin} type="button" class="btn btn-primary">Continue with google</button>
        </div>
        </>
    );
};

export default Login;