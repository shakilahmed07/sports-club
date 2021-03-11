import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faFutbol,
  faMars,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const ClubDetails = () => {
  const { idLeague } = useParams({});

  const [detail, setDetail] = useState({});

  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
    )
      .then((res) => res.json())
      .then((data) => setDetail(data.leagues[0]));
  }, [idLeague]);
  return (
    <div className="bg-dark py-5">
      <div className="container text-white">
        <img
          className="img-fluid pb-5"
          src={detail.strBanner}
          alt={detail.strLeague}
        />
        <div className="row">
          <div className="col-md-8">
            <div>
              <h2>{detail.strLeague}</h2>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Founded:{" "}
                {detail.intFormedYear}
              </p>
              <p>
                <FontAwesomeIcon icon={faFlag} /> Country: {detail.strCountry}
              </p>
              <p>
                <FontAwesomeIcon icon={faFutbol} /> Sport Type:{" "}
                {detail.strSport}
              </p>
              <p>
                <FontAwesomeIcon icon={faMars} /> Gender: {detail.strGender}
              </p>
            </div>
            <p>{detail.strDescriptionEN}</p>
          </div>
          <div className="col-md-4">
            <img
              className="img-fluid"
              src="https://linkpicture.com/q/male.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubDetails;

// male : https://linkpicture.com/q/male.png
// female : https://linkpicture.com/q/female.png
// rectangle : https://linkpicture.com/q/Rectangle-28.png
