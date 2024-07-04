import React, { useState } from "react";
import GlobalStyle from "../style/GlobalStyle";
import colors from "../style/colors";
import fonts from "../style/fonts";
import styled from "styled-components";

import Header from "../components/header";
import Footer from "../components/footer";

import Modal from "../components/modal";

const movieonestatic = {
  adult: false,
  backdrop_path: "/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg",
  genre_ids: (4)[(16, 10751, 12, 35)],
  id: 1022789,
  original_language: "en",
  original_title: "Inside Out 2",
  overview:
    "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
  popularity: 4502.62,
  poster_path: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
  release_date: "2024-06-11",
  title: "Inside Out 2",
  video: false,
  vote_average: 7.71,
  vote_count: 1245,
};

const movieArraystatic = [
  {
    adult: false,
    backdrop_path: "/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg",
    genre_ids: (4)[(16, 10751, 12, 35)],
    id: 1022789,
    original_language: "en",
    original_title: "Inside Out 2",
    overview:
      "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
    popularity: 4502.62,
    poster_path: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    release_date: "2024-06-11",
    title: "Inside Out 2",
    video: false,
    vote_average: 7.71,
    vote_count: 1245,
  },
  {
    adult: false,
    backdrop_path: "/gRApXuxWmO2forYTuTmcz5RaNUV.jpg",
    genre_ids: (4)[(28, 80, 53, 35)],
    id: 573435,
    original_language: "en",
    original_title: "Bad Boys: Ride or Die",
    overview:
      "After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.",
    popularity: 1329.004,
    poster_path: "/nP6RliHjxsz4irTKsxe8FRhKZYl.jpg",
    release_date: "2024-06-05",
    title: "Bad Boys: Ride or Die",
    video: false,
    vote_average: 7,
    vote_count: 474,
  },
];
// full page
const Page = styled.div`
  //   border: 3px dashed green; // DEV DEL
  //   width: 100%;
`;

// page minus footer
const HomeContainer = styled.section`
  // import padding from GlobalStyle
  //   border: 3px dashed pink; // DEV DEL

  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

// // Bulk of page
const FlexListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;

  background-color: ${colors.color_primary01};
  border-radius: 25px;

  color: ${colors.primary};

  @media (min-width: 375px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    gap: 30px;

    padding: 0;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;

    gap: 20px;

    padding: 0;
  }
`;

const SectionTitle = styled.h3`
  width: 100%;

  color: ${colors.raisin_black};
  font-family: ${fonts.font_pagetitle}, serif;
  font-size: 2.5em;
  background-color: ${colors.color_primary02};
  border-radius: 20px;
  text-align: center;
`;

const MovieContainer = styled.div`
  //   border: 3px dotted orange; // DEV DEL
  display: flex;

  height: 340px;
  width: 340px;
  border-radius: 10px;

  background-size: cover;

  @media (min-width: 375px) and (max-width: 768px) {
    height: 280px;
  }

  @media (max-width: 375px) {
    height: 255px;
    // width: 335px;
  }
`;

const MovieItem = styled.div`
  border: 3px dotted cornflowerblue; // DEV DEL
  display: flex;
  width: 100%;
  height: 100%;

  // overlay
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
`;

// MOVIE CARDS
const MovieTestItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.color_primary01};
  border-radius: 25px;
  padding: 3px;
  //   width: 390px;
`;

const MovieTestItemSmallRow = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.color_primary01};
  border-radius: 25px;
  padding: 3px;
  //   width: 390px;
`;

const MovieName = styled.p`
  margin: 10px 0 5px 10px;
  font-family: ${fonts.font_movietitle};
  color: ${colors.color_lavender};
  font-size: 22px;
`;

const MovieNameSmall = styled.p`
  margin: 0 auto;
  margin-top: 5px;
  font-family: ${fonts.font_movietitle};
  color: ${colors.color_lavender};
  font-size: 16px;
`;

const Movieposter = styled.div`
  height: 240px;
  width: 165px;
  min-width: 64px;
  margin: 0 10px 0 10px;

  border-right: 2px solid ${colors.color_black};
  border-bottom: 2px solid ${colors.color_black};
  border-left: 1px solid ${colors.color_mediumgrey};
  border-top: 1px solid ${colors.color_mediumgrey};

  background: ${colors.color_lilac};
  background-size: cover;
`;

const MovieposterSmall = styled.div`
  height: 140px;
  width: 100px;
  min-width: 64px;
  margin: 0 10px 0 10px;

  border-right: 2px solid ${colors.color_black};
  border-bottom: 2px solid ${colors.color_black};
  border-left: 1px solid ${colors.color_mediumgrey};
  border-top: 1px solid ${colors.color_mediumgrey};

  background: ${colors.color_lilac};
  background-size: cover;
`;

const MovieSpanInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

const Rating = styled.div`
  margin-left: 12px;
  font-size: 12px;
  color: ${colors.color_lavender};
`;
const Language = styled.div`
  margin: 0 0 0 10px;
  font-size: 12px;
  color: ${colors.color_lavender};
`;

const DetailsBtn = styled.button`
  background-color: rgba(67, 255, 100, 0);
  color: ${colors.raisin_black};
  text-decoration: underline;
  width: 100px;
  line-height: 8px;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 12px;
  border: none;
`;

const ModalHomeContainer = styled.div`
  //   border: 2px dotted cornflowerblue; // DEV DEL
`;

// FIXME can't figure this out
function Movie(props) {
  return (
    <MovieContainer
      key={props.id}
      //   style={{
      //     backgroundImage: `url(${props.cover})`,
      //   }}
    >
      <MovieItem>
        <MovieName>{props.original_title}</MovieName> // FlatName
        <Popularity>{props.popularity}</Popularity> // span
        <MoviePoster>{props.title}</MoviePoster> // poster
        <MoviePitch>Summary: {props.overview}</MoviePitch> // Summary p?
      </MovieItem>
    </MovieContainer>
  );
}

// ********************************************************************
//                           CONSTRUCTING THE PAGE
// ********************************************************************

function Home() {
  const [showModal, toggleModal] = useState(false);

  return (
    <Page>
      <GlobalStyle />
      <HomeContainer>
        <Header />

        {/* MAIN LIST */}
        <FlexListContainer>
          <SectionTitle>Now Playing</SectionTitle>

          <MovieTestItem>
            <MovieName>Inside Out 2</MovieName>

            {/* generate url from json 
          this one is poster_path: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg", */}
            <Movieposter
              style={{
                backgroundImage: `url("https://lumiere-a.akamaihd.net/v1/images/harbor_teaser_poster_united_kingdom_dc9a9914.jpeg?region=0,0,770,1100")`,
              }}
            ></Movieposter>

            <MovieSpanInfo>
              {/* could be converted to rating stars */}
              <Rating>Rating: 7.71</Rating>
              <Language>Lang: en</Language>
            </MovieSpanInfo>

            <DetailsBtn onClick={() => toggleModal(true)}>Details</DetailsBtn>
            <ModalHomeContainer onClick={() => toggleModal(false)}>
              {showModal && <Modal />}
            </ModalHomeContainer>
          </MovieTestItem>

          <MovieTestItem>
            <MovieName>Inside Out 2</MovieName>

            {/* generate url from json 
          this one is poster_path: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg", */}
            <Movieposter
              style={{
                backgroundImage: `url("https://lumiere-a.akamaihd.net/v1/images/harbor_teaser_poster_united_kingdom_dc9a9914.jpeg?region=0,0,770,1100")`,
              }}
            ></Movieposter>

            <MovieSpanInfo>
              {/* could be converted to rating stars */}
              <Rating>Rating: 7.71</Rating>
              <Language>Lang: en</Language>
            </MovieSpanInfo>

            <DetailsBtn onClick={() => toggleModal(true)}>Details</DetailsBtn>
            <ModalHomeContainer onClick={() => toggleModal(false)}>
              {showModal && <Modal />}
            </ModalHomeContainer>
          </MovieTestItem>

          <MovieTestItem>
            <MovieName>Inside Out 2</MovieName>

            {/* generate url from json 
          this one is poster_path: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg", */}
            <Movieposter
              style={{
                backgroundImage: `url("https://lumiere-a.akamaihd.net/v1/images/harbor_teaser_poster_united_kingdom_dc9a9914.jpeg?region=0,0,770,1100")`,
              }}
            ></Movieposter>

            <MovieSpanInfo>
              {/* could be converted to rating stars */}
              <Rating>Rating: 7.71</Rating>
              <Language>Lang: en</Language>
            </MovieSpanInfo>

            <DetailsBtn onClick={() => toggleModal(true)}>Details</DetailsBtn>
            <ModalHomeContainer onClick={() => toggleModal(false)}>
              {showModal && <Modal />}
            </ModalHomeContainer>
          </MovieTestItem>

          <MovieTestItem>
            <MovieName>Inside Out 2</MovieName>

            {/* generate url from json 
          this one is poster_path: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg", */}
            <Movieposter
              style={{
                backgroundImage: `url("https://lumiere-a.akamaihd.net/v1/images/harbor_teaser_poster_united_kingdom_dc9a9914.jpeg?region=0,0,770,1100")`,
              }}
            ></Movieposter>

            <MovieSpanInfo>
              {/* could be converted to rating stars */}
              <Rating>Rating: 7.71</Rating>
              <Language>Lang: en</Language>
            </MovieSpanInfo>

            <DetailsBtn onClick={() => toggleModal(true)}>Details</DetailsBtn>
            <ModalHomeContainer onClick={() => toggleModal(false)}>
              {showModal && <Modal />}
            </ModalHomeContainer>
          </MovieTestItem>
        </FlexListContainer>

        {/* SECONDARY LIST */}
        <FlexListContainer>
          <SectionTitle>Upcoming:</SectionTitle>
          <MovieTestItemSmallRow>
            <MovieNameSmall>Inside Out 2</MovieNameSmall>

            {/* generate url from json 
          this one is poster_path: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg", */}
            <MovieposterSmall
              style={{
                backgroundImage: `url("https://lumiere-a.akamaihd.net/v1/images/harbor_teaser_poster_united_kingdom_dc9a9914.jpeg?region=0,0,770,1100")`,
              }}
            ></MovieposterSmall>

            <DetailsBtn onClick={() => toggleModal(true)}>Details</DetailsBtn>
            <ModalHomeContainer onClick={() => toggleModal(false)}>
              {showModal && <Modal />}
            </ModalHomeContainer>

            {/* <Poster
                  style={{
                    backgroundImage: `url(${selectedMovie.poster})`,
                  }}
                /> */}
          </MovieTestItemSmallRow>

          <MovieTestItemSmallRow>
            <MovieNameSmall>Inside Out 2</MovieNameSmall>

            {/* generate url from json 
          this one is poster_path: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg", */}
            <MovieposterSmall
              style={{
                backgroundImage: `url("https://lumiere-a.akamaihd.net/v1/images/harbor_teaser_poster_united_kingdom_dc9a9914.jpeg?region=0,0,770,1100")`,
              }}
            ></MovieposterSmall>

            <DetailsBtn onClick={() => toggleModal(true)}>Details</DetailsBtn>
            <ModalHomeContainer onClick={() => toggleModal(false)}>
              {showModal && <Modal />}
            </ModalHomeContainer>

            {/* <Poster
                  style={{
                    backgroundImage: `url(${selectedMovie.poster})`,
                  }}
                /> */}
          </MovieTestItemSmallRow>

          <MovieTestItemSmallRow>
            <MovieNameSmall>Inside Out 2</MovieNameSmall>

            {/* generate url from json 
          this one is poster_path: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg", */}
            <MovieposterSmall
              style={{
                backgroundImage: `url("https://lumiere-a.akamaihd.net/v1/images/harbor_teaser_poster_united_kingdom_dc9a9914.jpeg?region=0,0,770,1100")`,
              }}
            ></MovieposterSmall>

            <DetailsBtn onClick={() => toggleModal(true)}>Details</DetailsBtn>
            <ModalHomeContainer onClick={() => toggleModal(false)}>
              {showModal && <Modal />}
            </ModalHomeContainer>

            {/* <Poster
                  style={{
                    backgroundImage: `url(${selectedMovie.poster})`,
                  }}
                /> */}
          </MovieTestItemSmallRow>
        </FlexListContainer>

        <Footer />
      </HomeContainer>
    </Page>
  );
}

export default Home;
