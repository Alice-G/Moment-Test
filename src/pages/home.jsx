// import React from "react";
import GlobalStyle from "../style/GlobalStyle";
import colors from "../style/colors";
import fonts from "../style/fonts";
import styled from "styled-components";

import Header from "../components/header";
import Footer from "../components/footer";

import Modal from "../components/modal";

// TODO DEL TestItem
// TODO flat stuff

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
  border: 3px dashed green; // DEV DEL
  //   width: 100%;
`;

// page minus footer
const HomeContainer = styled.section`
  // import padding from GlobalStyle
  //   border: 3px dashed pink; // DEV DEL

  //   @media (max-width: 375px) {
  //     display: flex;
  //     flex-direction: column;
  //     align-items: center;
  //   }
`;

// // Bulk of page
const FlexListContainer = styled.div`
  border: 3px dashed blue; // DEV DEL
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  //   justify-content: space-evenly;
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

const MovieContainer = styled.div`
  border: 3px dotted orange; // DEV DEL
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

const FlatContainer = styled.div`
  border: 3px dashed orange; // DEV DEL
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

const FlatItem = styled.div`
  border: 3px dashed cornflowerblue; // DEV DEL
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

const FlatName = styled.h3`
  border: 3px dashed red; // DEV DEL
  color: ${colors.light};

  margin: 20px;
  margin-top: auto;

  font-size: 18px;
`;

// MOVIE CARDS HARDCODED
const MovieTestItem = styled.p`
  display: flex;
  flex-direction: column;
  background-color: ${colors.color_primary01};
  border-radius: 25px;
  //   width: 390px;
`;
const Backdrop = styled.p`
  border: 2px dotted cornflowerblue; // DEV DEL
`;

const MovieName = styled.p`
  margin: 10px 0 5px 10px;
  font-family: ${fonts.font_movietitle};
  color: ${colors.color_lavender};
  font-size: 22px;
`;

const MoviePitch = styled.p`
  margin: 0 0 5px 10px;
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

const MovieSpanInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
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

function Flat(props) {
  return (
    <FlatContainer
      key={props.id}
      style={{
        backgroundImage: `url(${props.cover})`,
      }}
    >
      <FlatItem>
        <FlatName>{props.title}</FlatName>
      </FlatItem>
    </FlatContainer>
  );
}

function Movie(props) {
  return (
    <MovieContainer
      key={props.id}
      //   style={{
      //     backgroundImage: `url(${props.cover})`,
      //   }}
    >
      <MovieItem>
        {" "}
        // FlatItem
        <MovieName>{props.original_title}</MovieName> // FlatName
        <Popularity>{props.popularity}</Popularity> // span
        <MoviePoster>{props.title}</MoviePoster> // poster
        <MoviePitch>Summary: {props.overview}</MoviePitch> // Summary p?
      </MovieItem>
    </MovieContainer>
  );
}

// DEV DEL
const TestItem = styled.div`
  border: 3px dotted green; // DEV DEL
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

// ********************************************************************
//                           CONSTRUCTING THE PAGE
// ********************************************************************

function Home() {
  //   const [showModal, toggleModal] = useState(false);

  return (
    <Page>
      <GlobalStyle />
      <HomeContainer>
        <Header />

        <FlexListContainer>
          {/* DEV */}
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

            {/* { showModal && <Modal /> }
            <button onClick={() => toggleModal(true)}>Click me</button> */}

            {/* <Poster
                  style={{
                    backgroundImage: `url(${selectedMovie.poster})`,
                  }}
                /> */}
          </MovieTestItem>
          {/* //DEL  */}
          {/*   {jsonFlats.map((flat) => (
            <div key={flat.id} to={`/logement/${flat.id}`}>
              <Movie key={flat.id} title={flat.title} cover={flat.cover} />
            </div>
          ))}*/}
          {/* <TestItem /> */}
          {/* //DEL  */}
          {Object.keys(movieonestatic).map((movie) => (
            // <li key={objKey}>{object[objKey]}</li>
            <div key={movie.id}>
              <li>Today: {movie.original_title}!</li>
              <li>{movie.id}</li>
            </div>
          ))}
          {/* const movieonestatic = {
    id: 1022789,
    original_title: "Inside Out 2", */}
        </FlexListContainer>
        <Footer />
      </HomeContainer>
    </Page>
  );
}

export default Home;

// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT
// HINT HINT HINT

// // full page
// const Page = styled.div`
//   // border: 3px dashed green; // DEV
// `;
// // page minus footer
// const HomeContainer = styled.section`
//   // import padding from GlobalStyle

//   @media (max-width: 375px) {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// // Banner
// const ImageContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   background-size: cover;
//   height: 223px;
//   border-radius: 25px;
//   margin-bottom: 43px;

//   background-position-y: center;

//   @media (min-width: 375px) and (max-width: 768px) {
//     margin-bottom: 25px;
//   }

//   @media (max-width: 375px) {
//     height: 111px;
//     width: 335px;

//     margin-bottom: 10px;
//   }
// `;

// const ImageTextContainer = styled.div`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   border-radius: 25px;
//   background-color: rgba(0, 0, 0, 0.6);
// `;
// const ImageText = styled.p`
//   color: ${colors.light};
//   text-align: center;
//   font-size: 48px;

//   background-position-y: center;
//   margin: auto;

//   @media (min-width: 375px) and (max-width: 768px) {
//     font-size: 32px;
//   }

//   @media (max-width: 375px) {
//     font-size: 24px;
//   }
// `;

// // Bulk of page
// const FlexListContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: space-evenly;
//   gap: 56px 50px;
//   padding: 56px 50px;

//   background-color: ${colors.shade};
//   border-radius: 10px;

//   color: ${colors.primary};

//   @media (min-width: 375px) and (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;

//     gap: 30px;

//     padding: 0;

//     background-color: ${colors.light};
//   }

//   @media (max-width: 375px) {
//     flex-direction: column;
//     align-items: center;

//     gap: 20px;

//     padding: 0;

//     background-color: ${colors.light};
//   }
// `;
// // did not make it an a element so that there aren't any errors in chrome console. firefox adjusts for this
// const FlatContainer = styled.div`
//   display: flex;

//   height: 340px;
//   width: 340px;
//   border-radius: 10px;

//   background-size: cover;

//   @media (min-width: 375px) and (max-width: 768px) {
//     height: 280px;
//   }

//   @media (max-width: 375px) {
//     height: 255px;
//     // width: 335px;
//   }
// `;

// const FlatItem = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100%;

//   // overlay
//   border-radius: 10px;
//   background: linear-gradient(
//     180deg,
//     rgba(255, 255, 255, 0) 0%,
//     rgba(0, 0, 0, 0.5) 100%
//   );
// `;
// const FlatName = styled.h3`  // MovieTitle
//   color: ${colors.light};

//   margin: 20px;
//   margin-top: auto;

//   font-size: 18px;
// `;

// function Flat(props) {
//   return (
//     <FlatContainer
//       key={props.id}
//       style={{
//         backgroundImage: `url(${props.cover})`,
//       }}
//     >
//       <FlatItem>
//         <FlatName>{props.title}</FlatName>
//       </FlatItem>
//     </FlatContainer>
//   );
// }

// // constructing the page

// function Home() {
//   return (
//     <Page>
//       <HomeContainer>
//         <ImageContainer
//           style={{ backgroundImage: `url(${homeBannerBackground})` }}
//         >
//           <ImageTextContainer>
//             <ImageText>Chez vous, partout et ailleurs</ImageText>
//           </ImageTextContainer>
//         </ImageContainer>

//         <FlexListContainer>
//           {jsonFlats.map((flat) => (
//             <div key={flat.id} to={`/logement/${flat.id}`}>
//               <Flat key={flat.id} title={flat.title} cover={flat.cover} />
//             </div>
//           ))}
//         </FlexListContainer>
//       </HomeContainer>
//     </Page>
//   );
// }

// // export default Home
