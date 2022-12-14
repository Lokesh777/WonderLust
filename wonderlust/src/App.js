import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import './App.css';
import Simple from "./Component/navbar/navbar";
import Allroutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <ChakraProvider><Simple/></ChakraProvider>
       <Allroutes/>
    </div>
  );
}

export default App;
