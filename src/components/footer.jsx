import styled from "styled-components";
import colors from "../style/colors";
import fonts from "../style/fonts";

// // .. .. // // .. .. // //  .. .. STYLING
const FooterContainer = styled.div``;

const FooterText = styled.p`
  color: ${colors.color_black};
  font-family: ${fonts.font_gen}, serif;
  font-size: 0.8em;
  font-weight: 300;
  background-color: ${colors.color_primary02};
  border-radius: 25px 0 25px 0;
  text-align: center;
  padding: 10px;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>This is interesting footer text.</FooterText>
    </FooterContainer>
  );
}
export default Footer;
