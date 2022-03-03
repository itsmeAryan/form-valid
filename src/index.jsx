import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import "./index.css"
import {CookiesProvider} from "react-cookie"
import {BrowserRouter as Browser} from "react-router-dom"
const Root=document.getElementById("root");
ReactDOM.render(
  <CookiesProvider>
       <Browser>
    <App/>
   </Browser>
  </CookiesProvider>,
    Root
)