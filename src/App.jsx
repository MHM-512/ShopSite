import { useState } from 'react';
import MediaCard from './component/Card';
//Routing
import { BrowserRouter, Routes } from "react-router-dom"
import { Route } from 'react-router-dom';
<<<<<<< HEAD

=======
// import {Routes} from 'react-router-dom';
>>>>>>> 865fee61cdd8d565eceaa68b5bf4d6889f306e18
//menunavbar
import MenuAppBar from './component/MenuAppBar';
import Profile from './component/profile';
import Home from './component/Home';
import Account from './component/Account';
import SignIn from './component/SignUp';
import Login from './component/login';
<<<<<<< HEAD
import SignUp from './component/SignUp';
import AlertVariousStates from './component/AlertVariousStates';

=======
>>>>>>> 865fee61cdd8d565eceaa68b5bf4d6889f306e18

export default function LoadingButtons() {
  const [loading, setloading] = useState(true)

  return (
    <>
      <BrowserRouter >

        <MenuAppBar />
<<<<<<< HEAD

=======
        
>>>>>>> 865fee61cdd8d565eceaa68b5bf4d6889f306e18
        <Routes>
          <Route path='/profile' Component={Profile} />
          <Route path='/' Component={Home} />
          <Route path='/Home' Component={Home} />
          <Route path='/Account' Component={Account} />
<<<<<<< HEAD
          <Route path='/SignUp' Component={SignUp} />
          <Route path='/login' Component={Login} />
          {/* <Route path='/Alert' Component={AlertVariousStates} /> */}

        </Routes>

        <AlertVariousStates />

=======
          <Route path='/SignIn' Component={SignIn} />
          <Route path='/login' Component={Login} />
        </Routes>
       
       
       
>>>>>>> 865fee61cdd8d565eceaa68b5bf4d6889f306e18
      </BrowserRouter>

    </>
  );
}
