import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import './App.css';
import Navbar from "./Component/navbar/navbar";
import Allroutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
        <ChakraProvider><Navbar/></ChakraProvider>
       <Allroutes/>
    </div>
  );
}

export default App;
