import React,{useEffect,useContext} from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import './App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import {AuthContext, FirebaseContext} from './store/Context';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home'; 

function App() {
  const {setUser}=useContext(AuthContext)
  const {firebase} =useContext(FirebaseContext)
  useEffect(() => {
  firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
  })
  }, [firebase,setUser])
  
  return (
    <div>
    <Router>
      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='signup' element={<Signup />} />
      <Route exact path='/login' element={<Login />} />
      {/* <Route path='/signup'>
      <Signup/>
      </Route>
      <Route path='/login'>
      <Login/>
      </Route> */}
      </Routes>

    </Router>
  
    </div>
  );
}

export default App;
