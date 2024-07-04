import styled from "styled-components";

import Home from "../src/pages/home";

import Attempt from "../src/pages/Attempt";
import AttemptTWO from "../src/pages/AttemptTWO";

// import ErrorPage from '../pages/notFound'
// import StyledGlobalStyle from "./style/GlobalStyle"; // DECIDE Do I need this here?

const HomeContainer = styled.div`
  // border: 2px dotted yellow; // DEV DEL
`;

function App() {
  return (
    <HomeContainer>
      <Home />
    </HomeContainer>
  );
}

export default App;
