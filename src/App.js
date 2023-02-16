import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import { useContext, useEffect } from 'react';
import {AuthContext, FirebaseContext} from './store/Context'
import Post from './store/postContext';
import ViewMore from './Pages/ViewMore';

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(() => {
   firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
   })
  })
  
  return (
    <div className="App">
      <Post>
      <Router>
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/signup' element={<Signup />}>
        </Route>
        <Route path='/login' element={<Login />}>
        </Route>
        <Route path='/create' element={<Create />}>
        </Route>
        <Route path='/view' element={<View />}>
        </Route>
        <Route path='/viewmore' element={<ViewMore />}>
        </Route>
      </Routes>
      </Router>
      </Post>
    </div>
  );
}

export default App;
