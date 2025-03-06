import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import GetGreetingBtn from "./components/button/GetGreetingBtn";

const App = () => {
  return (
    <div className="h-screen flex flex-col justify-between ">
      <Navbar></Navbar>
      <GetGreetingBtn></GetGreetingBtn>
      <Footer></Footer>
    </div>
  );
};

export default App;
