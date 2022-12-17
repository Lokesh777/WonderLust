import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import './App.css';
import { Footer } from "./Component/footer/footer";
import Navbar from "./Component/navbar/navbar";
import Allroutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
        <ChakraProvider><Navbar/></ChakraProvider>
       <Allroutes/>
       <Footer />
    </div>
  );
}

export default App;
