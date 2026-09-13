import { useState } from 'react';
import MediaCard from './component/Card';
//Routing
import { BrowserRouter, Routes } from "react-router-dom"
import { Route } from 'react-router-dom';

//menunavbar
import MenuAppBar from './component/MenuAppBar';
import Profile from './component/profile';
import Home from './component/Home';
import Account from './component/Account';
import SignIn from './component/SignUp';
import Login from './component/login';
import SignUp from './component/SignUp';
import AlertVariousStates from './component/AlertVariousStates';


export default function LoadingButtons() {
  const [loading, setloading] = useState(true)

  return (
    <>
      <BrowserRouter >

        <MenuAppBar />

        <Routes>
          <Route path='/profile' Component={Profile} />
          <Route path='/' Component={Home} />
          <Route path='/Home' Component={Home} />
          <Route path='/Account' Component={Account} />
          <Route path='/SignUp' Component={SignUp} />
          <Route path='/login' Component={Login} />
          {/* <Route path='/Alert' Component={AlertVariousStates} /> */}

        </Routes>

        <AlertVariousStates />

      </BrowserRouter>

    </>
  );
}
