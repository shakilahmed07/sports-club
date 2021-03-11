import React, { useState, useEffect } from "react";
import SingleClub from "../SingleClub/SingleClub";

const Club = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`)
      .then((res) => res.json())
      .then((data) => setClubs(data.leagues));
  }, []);
  return (
    <div className="bg-dark py-5">
      <div className="container mt-5">
        <div className="row">
          {clubs.map((team) => (
            <SingleClub key={team.id} team={team} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Club;
