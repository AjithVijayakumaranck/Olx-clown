import React, { useContext } from 'react';
import {useState} from 'react';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import {useNavigate} from 'react-router-dom'
import './Login.css';

function Login() {
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')
  useEffect(() => {
    first
  
    return () => {
      second
    }
  },[])
  
  const history =useNavigate()
  const {firebase}=useContext(FirebaseContext)
  const handleLogin=(e) => {
       e.preventDefault()
       firebase.auth().signInWithEmailAndPassword(email,password).then((result)=>{
        history('/')
       }).catch((err)=>{
        alert(err.message)
       })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} style={{display:'flex' ,margin:"auto"}}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname" style={{marginTop:"20px"}}>Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname" style={{marginTop:"20px"}}>Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button >Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
