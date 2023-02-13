import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Addtocart from '../Home/Addtocart';
import Productpage from '../Home/Product';
import Singleproduct from '../Home/Singleproduct';
import Login from '../Login/Login';


function Routers() {
  return (
    <div>
    
      <Routes>
        <Route path ="/" element = {<Login/>}/>
        <Route path = "/productpage" element = {<Productpage/>}/>
        <Route path = "/products/:id" element = {<Singleproduct/>}/>
        <Route path = "/addtocart" element = {<Addtocart/>}/>
      </Routes>
    \
     
    </div>
  );
}

export default Routers;
