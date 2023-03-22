import React from "react";
import Routers from "./Combinerouters/Routers";
import NavbarComp from "./Headers/Navbar";
import { Link } from "react-router-dom";
import HomePage from "./Testfolder/Homepage";
import UserPage from "./Testfolder/Userpage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavbarComp />
      <Routers />

    </>
    // <>
    //   <Routes>
    //     <Route exact path="/" element={<HomePage/>} />
    //     <Route path="/:id" element={<UserPage/>} />
    //   </Routes>
    // </>
  );
}

export default App;
