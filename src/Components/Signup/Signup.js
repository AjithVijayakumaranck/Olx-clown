// import { logDOM } from '@testing-library/react';
import React, { useState,useContext } from 'react';
// import
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Signup.css';
import {Link, useNavigate} from 'react-router-dom'
// import {useNavigate} from "react-router-dom";
// import { useNavigate } from "@reach/router"
 

export default function Signup() {
  // let navigate=useNavigate()
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const history =useNavigate()
  let handlesubmit = (e)=>{
    e.preventDefault();
    console.log(firebase);
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      console.log(result.user);
      result.user.updateProfile({displayName:username}).then(
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          userName:username,
          phone:phone
        }).then(()=>{
           history('/login')
        })
      )
    })
//  firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
//   result.user.updateProfile({displayName:username})
//  })
  }
  
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" style={{margin:"auto",display:'flex'}} src={Logo}></img>
        <form onSubmit={handlesubmit}>
          <label htmlFor="fname" style={{marginTop:"20px"}}>Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder="John"
          />
          <br />
          <label htmlFor="faname" style={{marginTop:"20px"}}>Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="faname"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            placeholder="Doe"
          />
          <br />
          <label htmlFor="lname" style={{marginTop:"20px"}}>Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            name="phone"
            placeholder=''
          />
          <br />
          <label htmlFor="laname" style={{marginTop:"20px"}}>Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="laname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            // defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
      
      {/* <Link to="/signup">
        login
      </Link> */}
        <a onClick={()=>{
   history('/login')         // history.push('/signup')
        }}>Login</a>
      </div>
    </div>
  );
}
