import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';
import { login, logout } from './features/userSlice';
import { selectUser } from './features/userSlice';
import { auth } from './firebase/firebase';
import './App.css';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("auth user is", authUser);
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }));
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    //BEM
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
          <Login />
        )}
    </div>
  );
}

export default App;
