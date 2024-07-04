import styled from "styled-components";
import colors from "../style/colors";
import fonts from "../style/fonts";

const ModalContainer = styled.div`
  //   position: absolute;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.rich_black06};
`;

///////// USE "backdrop" imported from JSON /xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg

const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  border-radius: 25px;

  width: 500px;
  height: 500px;

  //   background-size: cover;

  ::after {
    content: ""; // ::before and ::after both require content
    border-radius: 25px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${colors.color_primary04};
  }
`;

const ModalWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  border-radius: 25px;

  width: 420px;
  height: 450px;

  background-color: ${colors.color_primary07};
  border-radius: 25px;

  color: ${colors.raisin_black};
`;

const MoviePitch = styled.p`
  margin: 15px;
`;

function Modal() {
  return (
    <ModalContainer>
      <ModalBackground
        style={{
          backgroundImage: `url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/dhcy4lv-a0f28cdf-287d-4c7e-8730-683e7c397f7d.jpg/v1/fill/w_1280,h_656,q_75,strp/inside_out_2__2024__textless_banner__01_by_mintmovi3_dhcy4lv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjU2IiwicGF0aCI6IlwvZlwvODQ2YTkwODYtOGE0MC00M2UwLWFhMTAtMmZjN2Q2ZDczNzMwXC9kaGN5NGx2LWEwZjI4Y2RmLTI4N2QtNGM3ZS04NzMwLTY4M2U3YzM5N2Y3ZC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.JbEf0NEe-SjsQhaHK3rB6-PoZ240dhgkWamOrOwmWGc")`,
        }}
      >
        <div></div>
      </ModalBackground>
      <ModalWrapper>
        <MoviePitch>
          Summary : <br />
          Teenager Riley's mind headquarters is undergoing a sudden demolition
          to make room for something entirely unexpected: new Emotions! Joy,
          Sadness, Anger, Fear and Disgust, who’ve long been running a
          successful operation by all accounts, aren’t sure how to feel when
          Anxiety shows up. And it looks like she’s not alone.
        </MoviePitch>
      </ModalWrapper>
    </ModalContainer>
  );
}
export default Modal;

// Should be imported from "backdrop" and "overview" with id
