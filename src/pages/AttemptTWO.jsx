import styled from "styled-components";

/////// ATTEMPT NUMBER TWO BASED ON https://hospodarets.com/fetch_in_action /////

function AttemptTWO() {
  // const url =
  //   "https://api.themoviedb.org/3/movie/now_playing?api_key=7bed5b1e5de144708f4d3cda963081fd";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization: "Bearer 7bed5b1e5de144708f4d3cda963081fd",
  //   },
  // };
  // // fetch(url, options)
  // //   .then((res) => res.json())
  // //   .then((json) => console.log(json))
  // //   .catch((err) => console.error("error:" + err));
  // BLOCK BLOCK BLOCK

  const array = ["first", "second", "third"];

  const object = {
    first: "first value",
    second: "second value",
    third: "third value",
  }; // this is once I've accessed "results"

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

  console.log(movieonestatic);

  // check on the format of this CSSStyleDeclaration. function?

  // displays one movie
  // const movieData = movieonestatic.map((movieone) => (
  //   <li key={movieone.id}>
  //     <p>{movieone.original_title}</p>
  //     <span>{movieone.popularity}</span>
  //     <p>Summary: {movieone.overview}</p>
  //   </li>
  // ));

  // const arrayDataItems = courses.map(course =>
  //   <li key={course.id}>
  //     <p>{course.name}</p>
  //     <span>{course.price}</span>
  //   </li>

  // )

  const arrayOfObjects = [
    {
      id: 28,
      Title: "Sweden",
    },
    {
      id: 56,
      Title: "USA",
    },
    {
      id: 89,
      Title: "England",
    },
  ];

  return (
    <div>
      <p>ATTEMPT TWO</p>

      <div>And nothing else yet</div>
      <p>mapping of array</p>
      <ul>
        {/* // OK this works for array items */}
        {array.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>mapping of object</p>
      <ul>
        {Object.keys(object).map((objKey) => (
          <li key={objKey}>{object[objKey]}</li>
        ))}
      </ul>
      <p>mapping of object</p>

      {/* {movieData} */}
    </div>
  );
} // THIS IS THE END OF THE AttempTWO function leave it at the end !!!!
export default AttemptTWO;
