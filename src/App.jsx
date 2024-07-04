// BLOCK FIXME LEG BUG OK HINT DEL TEST TODO ASK WEIRD TRYING XXXX DECIDE CHECK DEV VALIDATOR

import { useEffect, useState } from "react";
import styled from "styled-components";

import Home from "../src/pages/home";

import Attempt from "../src/pages/Attempt";
import AttemptTWO from "../src/pages/AttemptTWO";

// import ErrorPage from '../pages/notFound'
// TODO use VALIDATOR

// import StyledGlobalStyle from "./style/GlobalStyle"; // DECIDE Do I need this here?

const HomeContainer = styled.div`
  // border: 2px dotted yellow; // DEV DEL
  // width: 100%; // FIXME
`;

function App() {
  return (
    <HomeContainer>
      <Home />

      <Attempt />
      <AttemptTWO />
    </HomeContainer>
  );
}

export default App;

// BLOCK BLOCK BLOCK
