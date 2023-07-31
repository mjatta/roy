
import React from "react";
import Progressbar from './component/progressbar';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StepsTheme as Steps } from "chakra-ui-steps";
import './App.css';

const theme = extendTheme({
  components: {
    Steps
  }
});


function App() {
  return (
    <div className="App" style={{margin: "85px"}}>
    <ChakraProvider theme={theme}>
      <Progressbar />
    </ChakraProvider>
    </div>
  );
}

export default App;
