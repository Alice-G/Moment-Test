import styled from "styled-components";
import colors from "../style/colors";
import fonts from "../style/fonts";

// // .. .. // // .. .. // //  .. .. STYLING
const HeaderContainer = styled.div`
  background-color: ${colors.color_primary04};
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  color: ${colors.color_darkgrey};
  font-family: ${fonts.font_pagetitle}, serif;
  font-size: 3.5em;
  background-color: ${colors.color_primary02};
  border-radius: 25px;
  text-align: center;
  padding: 10px;
`;

const Subtitle = styled.h2`
  color: ${colors.color_purpletaupe};
  font-family: ${fonts.font_handwritting}, serif;
`;

function Header() {
  return (
    <HeaderContainer>
      <Title>What are we watching, tonight?</Title>
      <Subtitle>Well, I tried</Subtitle>
    </HeaderContainer>
  );
}
export default Header;
