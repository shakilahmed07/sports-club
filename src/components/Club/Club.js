import React, { useState, useEffect } from "react";
import SingleClub from "../SingleClub/SingleClub";

const Club = () => {
  const [clubs, setClubs] = useState([]);
  const clubList = clubs.slice(1, 16);
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`)
      .then((res) => res.json())
      .then((data) => setClubs(data.leagues));
  }, []);

  return (
    <div className="bg-dark py-2">
      <div className="container mt-2">
        <div className="row">
          {clubList.map((detail, index) => (
            <SingleClub key={index} detail={detail} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Club;
