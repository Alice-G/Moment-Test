// import { useEffect, useState } from "react";

function Attempt() {
  // BLOCK TRYING from wdn web docs

  // const ChildComponent = ({ data }) => {
  //   return (
  //     <div>
  //       <h2>Child Component</h2>
  //       <pre>{JSON.stringify(data, null, 2)}</pre>
  //     </div>
  //   );
  // };

  async function getData() {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=7bed5b1e5de144708f4d3cda963081fd";

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer 7bed5b1e5de144708f4d3cda963081fd",
      },
    };

    // fetch(url, options)
    //   .then((res) => res.json())
    //   .then((json) => console.log(json))
    //   .catch((err) => console.error("error:" + err));

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);

      const text = JSON.stringify(json); // DEL
      // console.log(text); // DEL  this works OK

      // DEL this BLOCK
      // const obj = JSON.parse(json); // FIXME this doesn't work
      // console.log(obj);

      return json; // DO I NEED THAT CHECK
      // DEL this BLOCK
    } catch (error) {
      console.error(error.message);
    }
  }
  getData();

  // BLOCK TRYING from wdn web docs

  // HINT HINT HINT

  // here try to find props that exist in json from DB

  function Movie(props) {
    return (
      <div
        key={props.id}
        // style={{
        //   backgroundImage: `url(${props.cover})`,
        // }}
      >
        <div>
          <p>{props.title}</p>
        </div>
      </div>
    );
  }
  // HINT HINT HINT

  return (
    <div>
      // <p>This is imported from Try Page</p>
      <div>
        {/* // HINT HINT HINT */}
        {/* <div>{json[0]}</div> */}
        {/* <div>
          // here: jsonFlats is the imported json file
          {json.map((movie) => (
            <Movie key={movie.id} title={movie.title} cover={movie.cover} />
          ))}
        </div> */}
        {/* // HINT HINT HINT */}
      </div>
    </div>
  );
}

export default Attempt;
