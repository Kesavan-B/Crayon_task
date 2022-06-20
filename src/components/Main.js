import React from "react";
import Footer from "./footer/Footer";
import Navimg from "./navbar/Navimg";
import Navbar from "./navbar/Navbar";
import Sidenav from "./navbar/Sidenav";
import Mobilenav from "./navbar/Mobilenav";
// import Listview from "./card/Listview";
import New from "./card/New"



function Main() {
  return (
    <div className="main">
      <Navbar />
      <Navimg />
      {/* <Listview/> */}
      <Sidenav />
      
      <New/>
      <Footer />
      <Mobilenav/>
    </div>
  );
}
export default Main;
