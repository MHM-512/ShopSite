import { useState } from 'react';
import MediaCard from './component/Card';
//Routing
import { BrowserRouter, Routes } from "react-router-dom"
import { Route } from 'react-router-dom';
// import {Routes} from 'react-router-dom';
//menunavbar
import MenuAppBar from './component/MenuAppBar';
import Profile from './component/profile';
import Home from './component/Home';
import Account from './component/Account';
import SignIn from './component/SignIn';

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
          <Route path='/SignIn' Component={SignIn} />
        </Routes>
        {/* <SignIn/> */}
       
      </BrowserRouter>

    </>
  );
}
