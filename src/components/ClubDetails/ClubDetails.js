import React from "react";
import Rectangle from "../Photo/Rectangle-28.png";
const ClubDetails = () => {
  return (
    <div className="bg-dark py-5">
      <div className="container text-white my-5">
        <div className="row">
          <div className="col-md-6">
            <div>
              <h2>Name</h2>
              <p>Founded: {}</p>
              <p>Country: {}</p>
              <p>Sport Type:</p>
              <p>Gender:</p>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={Rectangle} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubDetails;

// https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4328
