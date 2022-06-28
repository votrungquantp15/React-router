import React from "react";
//index.js
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Greeting from "./greeting";
import Footer from "./greetingfooter";
import MyButton from "./button";
import MyNav from "./MyNav";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <MyNav></MyNav>
    <Greeting fullName="Mr.NAM"></Greeting>
    <br />
    <Greeting fullName="FPTU-HCM"></Greeting>
    <br />
    <Greeting></Greeting>

    <Footer copyright="By MR.Nam" nowdate={Date().toLocaleString()}></Footer>
    <MyButton></MyButton>
    <br />
    <MyButton></MyButton>
  </React.Fragment>
);

// const elem1 = document.getElementById("greeting1");
// root.render(<Greeting fullName="MR.NAM"></Greeting>, elem1);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
reportWebVitals();
