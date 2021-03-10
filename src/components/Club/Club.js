import React, { useState, useEffect } from "react";
import SingleMovie from "../SingleClub/SingleClub";

const Club = () => {
  const [movies, setMovies] = useState([]);
  //   const apiKey = "870967436c1517d581daf3b245495790";

  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`)
      .then((res) => res.json())
      .then((data) => setMovies(data.leagues));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {movies.map((movie) => (
          <SingleMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Club;
